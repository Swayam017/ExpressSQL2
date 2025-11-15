const Student = require("./students");
const IdentityCard = require("./IdentityCard");
const Department = require("./Department");
const StudentCourses = require("./StudentCourses");
const Courses = require("./Courses");

// One-to-One
Student.hasOne(IdentityCard, { foreignKey: "StudentId" });
IdentityCard.belongsTo(Student, { foreignKey: "StudentId" });

//one to many
Department.hasMany(Student, { foreignKey: "DepartmentId" });
Student.belongsTo(Department, { foreignKey: "DepartmentId" });

//Many to Many
Student.belongsToMany(Courses,{through:StudentCourses});
Courses.belongsToMany(Student,{through:StudentCourses});

module.exports = {
    Student,
    IdentityCard,
    Department,
    Courses,
    StudentCourses
};
