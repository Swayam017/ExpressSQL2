const express = require("express");
const router = express.Router();
const CourseController = require("../Controller/CourseController");

router.post("/addCourse",CourseController.addCourse);
router.post("/addStudentCourse",CourseController.addStudentToCourses);

module.exports = router;