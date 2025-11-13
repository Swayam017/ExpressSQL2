const express = require("express");
const router = express.Router();
const studentController = require("../Controller/StudentController");

router.post("/", studentController.addStudent);
router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
