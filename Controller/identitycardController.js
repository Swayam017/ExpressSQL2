const { Student, IdentityCard } = require("../models");

// ============================================
// CREATE Identity Card for a Student
// POST /students/:studentId/identity-card
// ============================================
exports.createCard = async (req, res) => {
    try {
        const { cardNo } = req.body;
        const { studentId } = req.params;

        // Check if student exists
        const student = await Student.findByPk(studentId);
        if (!student) {
            return res.status(404).send("Student not found");
        }

        // Create IdentityCard (IMPORTANT FIX)
        const card = await IdentityCard.create({
            cardNo,
            StudentId: studentId  // ✔ FIXED
        });

        res.status(201).json({
            message: "Identity card created successfully",
            data: card
        });

    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating identity card");
    }
};

// ============================================
// GET Identity Card by ID
// ============================================
exports.getCardById = async (req, res) => {
    try {
        const card = await IdentityCard.findByPk(req.params.id, {
            include: Student
        });

        if (!card) {
            return res.status(404).send("Identity card not found");
        }

        res.json(card);

    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching identity card");
    }
};

// ============================================
// GET Student with Identity Card
// ============================================
exports.getStudentWithCard = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.studentId, {
            include: IdentityCard
        });

        if (!student) {
            return res.status(404).send("Student not found");
        }

        res.json(student);

    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching student identity card");
    }
};

// ============================================
// DELETE Identity Card
// ============================================
exports.deleteCard = async (req, res) => {
    try {
        const card = await IdentityCard.findByPk(req.params.id);

        if (!card) {
            return res.status(404).send("Identity card not found");
        }

        await card.destroy();

        res.send("Identity card deleted successfully");

    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting card");
    }
};
