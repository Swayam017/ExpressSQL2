const express = require("express");
const router = express.Router();
const cardController = require("../controllers/identityCardController");

// Create identity card for a student
router.post("/students/:studentId/identity-card", cardController.createCard);

// Get identity card by card ID (with student info)
router.get("/identity-card/:id", cardController.getCardById);

// Get student + card details
router.get("/students/:studentId/identity-card", cardController.getStudentWithCard);

// Delete identity card
router.delete("/identity-card/:id", cardController.deleteCard);

module.exports = router;
