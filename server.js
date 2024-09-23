const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const { check, validationResult } = require('express-validator');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
});

// Route for signup
app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (name,email,password) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];

    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json({ message: "Error", error: err });
        }
        return res.json({ message: "User registered successfully", data: data });
    });
});

// Route for login
app.post('/login', [
    check('email', "Invalid email format").isEmail().isLength({ min: 10, max: 30 }),
    check('password', "Password length must be between 8 and 10 characters").isLength({ min: 8, max: 10 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Database query error", error: err });
        }

        if (data.length > 0) {
            return res.json({ message: "Login successful", data: data });
        } else {
            return res.status(401).json({ message: "Invalid credentials" });
        }
    });
});

app.listen(8088, () => {
    console.log("Server is running on port 88");
});
