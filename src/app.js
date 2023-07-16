/* require */
const express = require('express')
const path = require('path')


/* app */
const app = express()


/* rutas importadas */
const rutaIndex = require('./routers/indexRouter');
const rutaUsuario = require('./routers/usuarioRouter');
const rutaPeliculas = require('./routers/peliculaRouter');


/* config */
app.use(express.static(path.join(__dirname, '../public')));

/*motor de plantilla ejs*/
app.set('view engine', 'ejs');

/*en que carpeta se encuentra la carpeta "views"*/
app.set("views", path.join(__dirname, "/views"));


/* form config */
app.use(express.json())
app.use(express.urlencoded({extended:false}));


/* router */
app.use('/', rutaIndex);
app.use('/usuarios', rutaUsuario);
app.use('/peliculas', rutaPeliculas);

/* servidor */
const port = 3020
app.listen(port, () => console.log('Servidor corriendo http://localhost:' + port))







