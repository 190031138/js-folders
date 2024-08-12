const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const booksSchema = sequelize.define("books",{
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    title : {
    type: DataTypes.STRING,
    allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publication_year:{
        type: DataTypes.NUMBER,
        allowNull: false
    },
    isbn:{
        type: DataTypes.STRING,
        allowNull:false
    },
},
{
    freezeTableName: true
  });


module.exports = booksSchema;