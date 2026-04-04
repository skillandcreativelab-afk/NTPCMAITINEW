require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const passport = require("./auth");
const fs = require("fs");



const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// ================= FILE UPLOAD =================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    }
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Only image allowed
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only images allowed"));
    }
  },
});

app.use("/uploads", express.static("uploads"));

// ================= DATABASE =================
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "studentdb1",
});

db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("MySQL Connected...");
});

// ================= CREATE TABLE =================
db.query(`
  CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    fatherName VARCHAR(100),
    gender VARCHAR(10),
    address TEXT,
    qualification VARCHAR(100),
    mobile VARCHAR(15),
    studentId VARCHAR(50),
    photo VARCHAR(255)
  )
`);

// ================= ADD STUDENT =================
app.post("/api/students", upload.single("photo"), (req, res) => {
  const { name, fatherName, gender, address, qualification, mobile, studentId } = req.body;
  const photo = req.file ? req.file.filename : null;

  if (!name || !mobile) {
    return res.status(400).json({ error: "Name and Mobile required" });
  }

  const sql = `
    INSERT INTO students 
    (name, fatherName, gender, address, qualification, mobile, studentId, photo) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [name, fatherName, gender, address, qualification, mobile, studentId, photo], (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Insert failed" });
    }
    res.json({ message: "Student added successfully" });
  });
});

// ================= GET STUDENTS =================
app.get("/api/students", (req, res) => {
  db.query("SELECT * FROM students ORDER BY id DESC", (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Fetch failed" });
    }
    res.json(results);
  });
});

// ================= DELETE STUDENT =================
app.delete("/api/students/:id", (req, res) => {
  const id = req.params.id;

  // Pehle photo find karo
  db.query("SELECT photo FROM students WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: "Fetch error" });

    if (result.length > 0 && result[0].photo) {
      const filePath = `uploads/${result[0].photo}`;
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath); // delete photo
      }
    }

    // Ab record delete karo
    db.query("DELETE FROM students WHERE id = ?", [id], (err) => {
      if (err) return res.status(500).json({ error: "Delete failed" });

      res.json({ message: "Student & photo deleted successfully" });
    });
  });
});
// Google login
app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Callback
app.get("/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/admin",
    failureRedirect: "/",
  })
);

// Check login
app.get("/api/check-auth", (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ error: "Not logged in" });
  }
});
// ================= ADMIN PASSWORD CHECK =================
app.post("/api/admin-login", (req, res) => {
  const { password } = req.body;

  // Custom password (env file में रखें)
  if (password === process.env.ADMIN_PASSWORD) {
    req.session.isAdmin = true;  // session में flag set
    return res.json({ success: true });
  }

  res.status(401).json({ success: false, error: "Invalid admin password" });
});


// Logout
app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("http://localhost:5173");
  });
});
// ================= SERVER =================
app.listen(5000, () => {
  console.log("Server running on port 5000");
});