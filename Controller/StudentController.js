const db = require("../utils/db_connections");

const addStudent = (req, res) => {
    const { email, name } = req.body;
    const insertQuery = `INSERT INTO students (email, name) VALUES (?, ?)`;

    db.execute(insertQuery, [email, name], (err) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send(err.message);
        }
        console.log("Student inserted");
        res.status(200).send(`Student ${name} added`);
    });
};

const getAllStudents = (req, res) => {
    const query = `SELECT * FROM students`;

    db.execute(query, (err, rows) => {
        if (err) return res.status(500).send(err.message);

        res.status(200).json(rows);
    });
};

const getStudentById = (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM students WHERE id=?`;

    db.execute(query, [id], (err, rows) => {
        if (err) return res.status(500).send(err.message);
        if (rows.length === 0) return res.status(404).send("Student not found");

        res.status(200).json(rows[0]);
    });
};

const updateStudent = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const query = "UPDATE students SET name=? WHERE id=?";

    db.execute(query, [name, id], (err, result) => {
        if (err) return res.status(500).send(err.message);
        if (result.affectedRows === 0) return res.status(404).send("Student not found");

        res.status(200).send("Student updated");
    });
};

const deleteStudent = (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM students WHERE id=?";

    db.execute(query, [id], (err, result) => {
        if (err) return res.status(500).send(err.message);
        if (result.affectedRows === 0) return res.status(404).send("Student not found");

        res.status(200).send(`Student ${id} deleted`);
    });
};

module.exports = {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
};
