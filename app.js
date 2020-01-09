var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);

var rotaHome = require('./app/routes/home');
rotaHome(app);

var rotaFormularioInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia');
rotaFormularioInclusaoNoticia(app);

//cofigurando a porta que o servidor http irá ouvir
app.listen(3000, function() {
	console.log('Servidor ON');
});