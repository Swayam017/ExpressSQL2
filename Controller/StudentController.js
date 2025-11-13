const Student = require("../models/students");

// CREATE (Insert)
const addStudent = async (req, res) => {
    try {
        const { name, email, age } = req.body;

        const student = await Student.create({
            name,
            email,
            age
        });

        res.status(201).send(`Student ${name} created successfully!`);
    } catch (error) {
        console.log(error);
        res.status(500).send("Unable to create student");
    }
};

// READ (findAll)
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).send("Unable to fetch students");
    }
};

// READ (findByPk)
const getStudentById = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);

        if (!student) return res.status(404).send("Student not found");

        res.status(200).json(student);
    } catch (error) {
        res.status(500).send("Unable to fetch student");
    }
};

// UPDATE
const updateStudent = async (req, res) => {
    try {
        const { name, email, age } = req.body;

        const student = await Student.findByPk(req.params.id);

        if (!student) return res.status(404).send("Student not found");

        await student.update({ name, email, age });

        res.status(200).send("Student updated successfully");
    } catch (error) {
        res.status(500).send("Unable to update student");
    }
};

// DELETE
const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);

        if (!student) return res.status(404).send("Student not found");

        await student.destroy();

        res.status(200).send(`Student ${req.params.id} deleted`);
    } catch (error) {
        res.status(500).send("Unable to delete student");
    }
};

module.exports = {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
};
