require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const session = require("express-session");
const bcrypt = require("bcrypt");

const app = express();

// 1. MIDDLEWARES
app.use(cors({ 
    origin: "http://localhost:5173", 
    credentials: true 
}));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// 2. SESSION SETUP (Using SESSION_SECRET from .env)
app.use(session({
    secret: process.env.SESSION_SECRET || "fallback_secret_key", // .env se uthayega
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false, 
        httpOnly: true, 
        maxAge: 24 * 60 * 60 * 1000 
    }
}));

// 3. DATABASE CONNECTION (Using .env variables)
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) console.error("❌ MySQL NOT Connected!", err);
    else console.log("✅ MySQL Connected!");
});

// 4. MULTER STORAGE
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage: storage });

// --- ROUTES ---

// A. ADMIN LOGIN
app.post("/api/admin-login", (req, res) => {
    const { username, password } = req.body;
    console.log("Login attempt for:", username);
    
    const sql = "SELECT * FROM admins WHERE username = ?";
    db.query(sql, [username], async (err, result) => {
        if (err) return res.status(500).json({ success: false, error: err.message });
        
        if (result.length > 0) {
            const admin = result[0];
            const isMatch = await bcrypt.compare(password, admin.password);
            
            if (isMatch) {
                req.session.isAdmin = true;
                req.session.save((err) => {
                    if (err) return res.status(500).json({ success: false, error: "Session Save Failed" });
                    res.json({ success: true, message: "Login Successful" });
                });
            } else {
                res.status(401).json({ success: false, message: "Invalid Password" });
            }
        } else {
            res.status(401).json({ success: false, message: "Admin User not found" });
        }
    });
});

// B. AUTH CHECK
app.get("/api/check-auth", (req, res) => {
    if (req.session && req.session.isAdmin) {
        res.json({ isAdmin: true });
    } else {
        res.status(401).json({ isAdmin: false });
    }
});

// C. LOGOUT
app.get("/api/logout", (req, res) => {
    req.session.destroy((err) => {
        res.clearCookie('connect.sid');
        res.json({ success: true });
    });
});

// D. STUDENT REGISTRATION
app.post("/api/students", upload.single("photo"), (req, res) => {
    const { name, fatherName, gender, address, qualification, mobile, studentId } = req.body;
    const photo = req.file ? req.file.filename : null;

    const sql = "INSERT INTO students (name, fatherName, gender, address, qualification, mobile, studentId, photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [name, fatherName, gender, address, qualification, mobile, studentId, photo], (err, result) => {
        if (err) {
            console.error("❌ DB Error:", err);
            return res.status(500).json({ success: false, message: "Database Error" });
        }
        res.json({ success: true, message: "Registration Successful!" });
    });
});

// E. GET ALL STUDENTS
app.get("/api/get-students", (req, res) => {
    if (req.session && req.session.isAdmin) {
        const sql = "SELECT * FROM students ORDER BY id DESC";
        db.query(sql, (err, results) => {
            if (err) return res.status(500).json({ success: false, message: "Database Error" });
            res.json(results);
        });
    } else {
        res.status(401).json({ message: "Access Denied: Please Login First" });
    }
});

// Port ko bhi env se utha sakte hain, fallback 5000 rakha hai
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));