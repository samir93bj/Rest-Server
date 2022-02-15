//Requerimos 'dotenv' para tomar los datos de la configuracion del .env
require('dotenv').config();

const express = require('express');
const app = express();

//Almacenamos el puerto en la const port
const port = process.env.PORT;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port,() => {
    console.log(`Servidor corriendo en: https://localhost:${process.env.PORT}`);
});