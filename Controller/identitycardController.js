const { Student, IdentityCard } = require("../models");

// =============================================
// CREATE IdentityCard for a Student
// =============================================
exports.createCard = async (req, res) => {
    try {
        const { cardNo } = req.body;
        const { studentId } = req.params;

        // Check if student exists
        const student = await Student.findByPk(studentId);
        if (!student) return res.status(404).send("Student not found");

        // Create card
        const card = await IdentityCard.create({
            cardNo,
            studentId
        });

        res.status(201).json({
            message: "Identity card created successfully",
            card
        });

    } catch (error) {
        console.log(error);
        res.status(500).send("Unable to create Identity Card");
    }
};

// =============================================
// GET IdentityCard by ID (with Student info)
// =============================================
exports.getCardById = async (req, res) => {
    try {
        const card = await IdentityCard.findByPk(req.params.id, {
            include: Student
        });

        if (!card) return res.status(404).send("Identity card not found");

        res.status(200).json(card);
    } catch (error) {
        console.log(error);
        res.status(500).send("Unable to fetch identity card");
    }
};

// =============================================
// GET Student with IdentityCard
// =============================================
exports.getStudentWithCard = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.studentId, {
            include: IdentityCard
        });

        if (!student) return res.status(404).send("Student not found");

        res.status(200).json(student);

    } catch (error) {
        console.log(error);
        res.status(500).send("Unable to fetch student with card");
    }
};

// =============================================
// DELETE IdentityCard
// =============================================
exports.deleteCard = async (req, res) => {
    try {
        const card = await IdentityCard.findByPk(req.params.id);

        if (!card) return res.status(404).send("Identity card not found");

        await card.destroy();

        res.status(200).send("Identity card deleted");
    } catch (error) {
        console.log(error);
        res.status(500).send("Unable to delete identity card");
    }
};
