
const express = require('express');

const app = express();

const mainRoute = require('./routes/main');

const heroesRoute = require('./routes/heroes')


app.listen(3030, () => console.log('Server running in 3030 port'));


app.use('/', mainRoute);

app.use('/heroes', heroesRoute);




// Ruta Créditos
app.get('/creditos', function(req, res){
	res.send('Autor: Matias Gonzalez Créditos: Jonatan Céspedes')
})

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});