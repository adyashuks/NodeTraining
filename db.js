const Sequelize = require('sequelize');
const db = new Sequelize('demo', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

db.authenticate()
.then(() => {
    console.log('COnnection established');
})
.catch(err =>{
console.log('Error');
});
module.exports = {db};