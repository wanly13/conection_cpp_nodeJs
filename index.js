/* // ------- Requerimos lo necesario ------- \\
const express = require('express');
const app = express();

// ------- Middlewares: formatos de respuesta que se aceptarán ------- \\
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// ------- Configuracion Express ------- \\

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// ------- Routers ------- \\
app.use(require('./routers/index.routers.js'));

// ------- Llamado en el puerto creado ------- \\
const port = (process.env.port || 30000);
app.set('port' , port);
//app.listen(port)
app.listen(app.get('port'),(error)=>{
    if(error){
        console.log("Error en iniciar servivor");
    }
    else{
        console.log("Conectado: " + port);
    }
}) */

const createObject = require('./build/Release/addon');

const obj = createObject(10);
console.log(obj.plusOne());
// Prints: 11
console.log(obj.plusOne());
// Prints: 12
console.log(obj.plusOne());
// Prints: 13

const obj2 = createObject(20);
console.log(obj2.plusOne());
// Prints: 21
console.log(obj2.plusOne());
// Prints: 22
console.log(obj2.plusOne());
// Prints: 23


/* 
// ------------------------- P1 ------------------------- \\

const addon = require('./build/Release/addon');

const obj1 = addon.createObject(10);
const obj2 = addon.createObject(20);
const result = addon.add(obj1, obj2);

console.log(result);
// Prints: 30


// ------------------------- P2 ------------------------- \\

const createObject = require('./build/Release/addon');

const obj = createObject(10);
console.log(obj.plusOne());
// Prints: 11
console.log(obj.plusOne());
// Prints: 12
console.log(obj.plusOne());
// Prints: 13

const obj2 = createObject(20);
console.log(obj2.plusOne());
// Prints: 21
console.log(obj2.plusOne());
// Prints: 22
console.log(obj2.plusOne());
// Prints: 23

// ------------------------- P3 ------------------------- \\


const addon = require('./build/Release/addon');

const obj = new addon.MyObject(10);
console.log(obj.plusOne());
// Prints: 11
console.log(obj.plusOne());
// Prints: 12
console.log(obj.plusOne());
// Prints: 13


// ------------------------- P4 ------------------------- \\


const addon = require('./build/Release/addon');

const fn = addon();
console.log(fn());
// Prints: 'hello world'

// ------------------------- P5 ------------------------- \\

const addon = require('./build/Release/addon');

const obj1 = addon('hello');
const obj2 = addon('world');
console.log(obj1.msg, obj2.msg);
// Prints: 'hello world'


*/

