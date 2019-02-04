const Sequelize = require('sequelize');
const {db} = require('./db');
const User = db.define('user',{
    firstname : {
        type : Sequelize.STRING
    },
    lastname : {
        type : Sequelize.STRING
    },
    email : {
        type : Sequelize.STRING
    },
    password : {
        type : Sequelize.STRING
    }
},
    {
timestamps : false
    }
);
module.exports = {User};

//This is a model file to represent table of database