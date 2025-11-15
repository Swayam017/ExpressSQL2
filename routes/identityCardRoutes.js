const express = require("express");
const router = express.Router();
const cardController = require("../Controller/identitycardController");

router.post("/students/:studentId/identity-card", cardController.createCard);
router.get("/students/:studentId/identity-card", cardController.getStudentWithCard);
router.get("/identity-card/:id", cardController.getCardById);
router.delete("/identity-card/:id", cardController.deleteCard);

module.exports = router;
