const suma = require("./modulos/suma");
const resta = require("./modulos/resta");
const multiplicacion = require("./modulos/multiplicacion");
const division = require("./modulos/division");
const path = require("path");
const bodyParser = require("body-parser");


/*console.log (suma(50,60));
console.log (resta(25,15));
console.log (multiplicacion(3,5));
console.log (division(8,4));*/

//Primer paso: improtar la librería express
const express = require("express");

//Segundo paso: hacer instancial un objeto de tipo server o aplicación a partir de express
const app = express(); 

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


//Tercer paso: declarar una variable que guarde el puerto
const port = 8080;

//Cuarto paso: crear una ruta http
app.get("/", (req, res) => {
//    res.send("Hola Mundo");
res.sendFile(path.join(__dirname, "./Views/index.html"));
} );


app.get("/suma/:numeroA/:numeroB", (req, res) =>{

    console.log(req.params.numeroA);

    //get parametros
    let numA = parseFloat(req.params.numeroA);
    let numB = parseFloat(req.params.numeroB);

    //calcula la suma
    let result = suma(numA, numB);

    //envia el response status code: 200 y data en json
    res.status(200).json(result);


});

//post suma
app.post("/sumar", (req, res) => {
    console.log(req.body.a);
    console.log(req.body.b);
    res.status(200).json("Hola");
});


//Quinto paso: inicializar el listener del servidor
app.listen(port, () => {
    console.log("Servidor inicializado en http://localhost:" + port)    
});
