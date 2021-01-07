/* jshint esversion: 6 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./controllers/authController')(app);

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081");
});