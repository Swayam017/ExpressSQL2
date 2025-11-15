const { Department, Student } = require("../models");

exports.createDepartment = async (req, res) => {
    try {
        const { deptName } = req.body;

        const dept = await Department.create({ deptName });

        res.status(201).json({
            message: "Department created successfully",
            data: dept
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Unable to create department");
    }
};


exports.addStudentToDepartment = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const { departmentId } = req.params;

        // Check if department exists
        const dept = await Department.findByPk(departmentId);

        if (!dept) return res.status(404).send("Department not found");

        const student = await Student.create({
            name,
            email,
            age,
             DepartmentId: departmentId 
        });

        res.status(201).json({
            message: "Student added to department",
            data: student
        });

    } catch (error) {
        console.log(error);
        res.status(500).send("Unable to add student");
    }
};


exports.getDepartmentsWithStudents = async (req, res) => {
    try {
        const departments = await Department.findAll({
            include: Student
        });

        res.status(200).json(departments);
    } catch (error) {
        console.log(error);
        res.status(500).send("Unable to fetch departments");
    }
};


exports.getDepartmentById = async (req, res) => {
    try {
        const dept = await Department.findByPk(req.params.id, {
            include: Student
        });

        if (!dept) return res.status(404).send("Department not found");

        res.status(200).json(dept);
    } catch (error) {
        console.log(error);
        res.status(500).send("Unable to fetch department");
    }
};


exports.getStudentsByDepartment = async (req, res) => {
    try {
        const deptId = req.params.id;

        const students = await Student.findAll({
            where: { departmentId: deptId }
        });

        res.status(200).json(students);

    } catch (error) {
        console.log(error);
        res.status(500).send("Unable to fetch students");
    }
};

exports.assignStudent = async (req, res) => {
    try {
        const { deptId, studentId } = req.params;

        const department = await Department.findByPk(deptId);
        if (!department) return res.status(404).send("Department not found");

        const student = await Student.findByPk(studentId);
        if (!student) return res.status(404).send("Student not found");

        await student.update({ DepartmentId: deptId });

        res.send("Student assigned to department successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error assigning student");
    }
};
