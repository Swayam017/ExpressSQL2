const Course = require("../models/Courses");
const Student = require("../models/students");

const addCourse = async (req,res)=>{
    try{
        const{name} = req.body;
        const course = await Course.create({'name':name});
        res.status(201).json(course);
    }catch(error){
        res.status(500).json({'error':error.message});
    }
}

const addStudentToCourses = async (req,res) =>{
    try{
        const {StudentId,CourseId} = req.body;
        const student= await Student.findByPk(StudentId);
        const course = await Course.findAll({
            where:{
                id:CourseId
            }
        })
        await student.addCourse(course);

        const updatedStudent = await Student.findByPk(StudentId,{include:Course});
        res.status(200).json(updatedStudent);

    }catch(error){
         res.status(500).json({'error':error.message});
    }
}

module.exports = { 
    addCourse,
    addStudentToCourses
 };
