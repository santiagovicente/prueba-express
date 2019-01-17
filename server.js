const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers/helpers');

//Con esto decimos que carpeta queremos que sea publica y se la vean los usuarios.
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');
//Express HBS engine
app.set('view engine', 'hbs');



//Se usa con el hbs para enviar nuestra página
app.get('/', (req, res) => {

    //Renderiza  nuestra página home
    res.render('home', {
        nombre: 'santiago'
    });
});

//Se usa con el hbs para enviar nuestra página
app.get('/about', (req, res) => {

    //Renderiza  nuestra página about
    res.render('about');
});



app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});