const db = require("../utils/db_connections");

// Insert a new student
const addStudent = (req, res) => {
    const { name, email, age } = req.body;

    const sql = `INSERT INTO students (name, email, age) VALUES (?, ?, ?)`;

    db.execute(sql, [name, email, age], (err, result) => {
        if (err) {
            console.log("Insert Error:", err.message);
            return res.status(500).send(err.message);
        }

        console.log("Inserted:", { name, email, age });
        res.status(201).send("Student added successfully");
    });
};

// Get all students
const getAllStudents = (req, res) => {
    const sql = `SELECT * FROM students`;

    db.execute(sql, (err, rows) => {
        if (err) return res.status(500).send(err.message);
        res.status(200).json(rows);
    });
};

// Get student by ID
const getStudentById = (req, res) => {
    const { id } = req.params;

    const sql = `SELECT * FROM students WHERE id=?`;

    db.execute(sql, [id], (err, rows) => {
        if (err) return res.status(500).send(err.message);

        if (rows.length === 0)
            return res.status(404).send("Student not found");

        res.status(200).json(rows[0]);
    });
};

// Update student
const updateStudent = (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const sql = `UPDATE students SET name=?, email=?, age=? WHERE id=?`;

    db.execute(sql, [name, email, age, id], (err, result) => {
        if (err) {
            console.log("Update Error:", err.message);
            return res.status(500).send(err.message);
        }

        if (result.affectedRows === 0)
            return res.status(404).send("Student not found");

        console.log("Updated ID:", id);
        res.status(200).send("Student updated successfully");
    });
};

// Delete student
const deleteStudent = (req, res) => {
    const { id } = req.params;

    const sql = `DELETE FROM students WHERE id=?`;

    db.execute(sql, [id], (err, result) => {
        if (err) {
            console.log("Delete Error:", err.message);
            return res.status(500).send(err.message);
        }

        if (result.affectedRows === 0)
            return res.status(404).send("Student not found");

        console.log("Deleted ID:", id);
        res.status(200).send("Student deleted successfully");
    });
};

module.exports = {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};
