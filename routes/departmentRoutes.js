const express = require("express");
const router = express.Router();
const deptController = require("../Controller/DepartmentController");

router.post("/departments", deptController.createDepartment);
router.post("/departments/:departmentId/students", deptController.addStudentToDepartment);
router.post("/departments/:deptId/assign/:studentId", deptController.assignStudent);


router.get("/departments", deptController.getDepartmentsWithStudents);
router.get("/departments/:id", deptController.getDepartmentById);
router.get("/departments/:id/students", deptController.getStudentsByDepartment);


module.exports = router;
