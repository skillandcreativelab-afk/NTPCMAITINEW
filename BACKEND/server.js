const express = require("express");
const mysql = require("mysql2");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

app.use("/uploads", express.static("uploads"));

const upload = multer({ storage });

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "studentdb1",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// Create table if not exists
// db.query(`
//   CREATE TABLE IF NOT EXISTS students (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(100),
//     fatherName VARCHAR(100),
//     gender VARCHAR(10),
//     address TEXT,
//     qualification VARCHAR(100),
//     mobile VARCHAR(15),
//     studentId VARCHAR(50),
//     photo VARCHAR(255)
//   )
// `);

// API route
app.post("/api/students", upload.single("photo"), (req, res) => {
  const { name, fatherName, gender, address, qualification, mobile, studentId } = req.body;
  const photo = req.file ? req.file.filename : null;

  const sql = "INSERT INTO students (name, fatherName, gender, address, qualification, mobile, studentId, photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(sql, [name, fatherName, gender, address, qualification, mobile, studentId, photo], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Student registered successfully!");
  });
});

// Get all students
app.get("/api/students", (req, res) => {
  const sql = "SELECT * FROM students";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});


app.listen(5000, () => console.log("Server running on port 5000"));
