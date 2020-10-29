// const express = require('express');
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';

dotenv.config({ path: 'variables.env' });



const app = express();


// conectar la base de datos

db.authenticate()
     .then(() => console.log('base de datos conectada'))
     .catch(error => console.log(error));


// Definir puerto
const port = process.env.PORT || 4000;

// Definir host
const host = process.env.HOST || '0.0.0.0'

// Habilitar pug

app.set('view engine', 'pug');


// Crear nuestro middleware para obtener el a;o actual

app.use((request, response, next) => {

     const thisyear = new Date();

     // se le puede agregar un elemento nuevo a un objeto con la sintaxis de punto
     response.locals.year = thisyear.getFullYear();
     response.locals.nombre_sitio = 'Agencia de Viajes';
     // cuando hacemos nuestro propio middleware, se debe poner next para que node continue leyendo el archivo
     next();
});

// Agregar body parser para leer los datos del form
app.use(express.urlencoded({ extended: true }));

// definir la carpeta publica

app.use(express.static('public'));

// Agregar router
app.use('/', router);

app.listen(port, host, () => console.log(`El servidor esta funcionando en el puerto ${port} y el host ${host}`));