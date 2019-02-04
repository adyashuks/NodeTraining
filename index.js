const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {create,get} = require('./user.controller');

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
app.post('/api/user',create);

app.get('/api/user',get);

//   User.findAll().then(users => {
//     console.log(users[0].dataValues)
//   })

app.listen('8000',()=>{
    console.log('app started at port 8000');
})