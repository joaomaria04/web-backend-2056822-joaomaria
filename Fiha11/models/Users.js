module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Users', {
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        }
        }
        )};