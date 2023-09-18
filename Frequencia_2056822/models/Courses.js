module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Courses', {
        course_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        instructor:{
            type: DataTypes.STRING,
            allowNull: false,
        }
        }
    )};