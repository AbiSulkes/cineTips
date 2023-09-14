/* require */
const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');
const path = require('path');
const methodOverride = require("method-override");
const usuarioLogueoMiddleware = require('./src/middlewares/usuarioLogueoMiddleware');

/* app */
const app = express();

/* middleware de session */
app.use(session( {
    secret: "Este es mi secreto",
    resave:false,
    saveUninitialized:false
} )); 

/* middleware cookie */
app.use(cookies());

app.use(usuarioLogueoMiddleware);

/* rutas importadas */
const rutaIndex = require('./src/routers/indexRouter');
const rutaUsuario = require('./src/routers/usuarioRouter');
const rutaPeliculas = require('./src/routers/peliculaRouter');

/* config carpeta public */
app.use(express.static(path.join(__dirname, '../public')));

/*motor de plantilla ejs*/
app.set('view engine', 'ejs');

/*en que carpeta se encuentra la carpeta "views"*/
app.set("views", path.join(__dirname, "/views"));

/* formulario configuracion */
app.use(express.json());

/* capturar informacion del formulario */
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));

/* router */
app.use('/', rutaIndex);
app.use('/usuarios', rutaUsuario);
app.use('/peliculas', rutaPeliculas);

/* servidor 
const port = 3020
app.listen(port, () => console.log('Servidor corriendo http://localhost:' + port));*/

const port = process.env.PORT || 3020; // Utiliza el puerto proporcionado por Render o 3020 si no está definido
app.listen(port, '0.0.0.0', () => console.log('Servidor corriendo en el puerto ' + port));








