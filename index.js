// ========================Manera de crear un servidor con puro Node.js=====================================
// const http = require('http');  http es un Módulo nativo de Node.js
// http.createServer((req, res) => {
//     res.end('Hello World');
// }).listen(3000);
// ================================================================
const express = require('express');
const morgan = require('morgan');
// const ejs = require('ejs');

const app = express();



// SETTINGS configuraaciones 
app.set('appName', 'Mi primer server');
// Templates motores de plantillas, hacen más poderoso el html
app.set('views', __dirname + '/views'); //le concatenas la carperta views, express no entiende nada de rutas, por esta razón utilizas __dirname
// console.log(__dirname); atributo que te  indica la ruta de donde esta este archivo index.js
app.set('view engine', 'ejs'); // motor de la vista , motor de plantilla




//Middlewares tratan información que reciben del navegador
// app.use(function(req, res, next) {
//     console.log('request url:' + req.url);
//     next();
// });
// app.use((req, res, next) => {
//     console.log('Ha pasado por esta función');
//     next();
// });
//morgan 
app.use(morgan('combined'));

//RUTAS
app.get('/', (req, res) => {
    res.end('Hola Mundo desde express');
    res.render('index.ejs'); //cambias el end por rend, que es renderizar

});
app.get('/login', (req, res) => {
    res.end('Aquí va el login');
});
app.get('*', (req, res) => {
    res.end('Ruta no encontrada');
});
app.listen(3000, () => {
    console.log("servidor funcionando");
    console.log("Nombre de la app:", app.get('appName'));

});