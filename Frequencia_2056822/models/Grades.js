module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Grades', {
        grade:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        course_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        }
        )};