const Student = require("./students");
const IdentityCard = require("./IdentityCard");
const Department = require("./Department");

// One-to-One association
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

//1 to many
Department.hasMany(Student);
Student.belongsTo(Department);

module.exports = {
    Student,
    IdentityCard,
    Department
};
