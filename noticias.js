//importando a lib
var http = require('http');


var server = http.createServer( function(req, res){

	var categoria = req.url;
	if (categoria == '/tecnologia') {
		res.end("<html><body>Noticias de tecnologia</body></html>");	
	} else 	if (categoria == '/moda') {
		res.end("<html><body>Noticias de moda</body></html>");	
	} else 	if (categoria == '/beleza') {
		res.end("<html><body>Noticias de beleza</body></html>");	
	} else {
		res.end("<html><body>Portal de notícias</body></html>");
	}
});


server.listen(3000);

//console.log('Criando site de noticias com Node.js');


/*
	express => Um framework NodeJS para WEB (Implementa API para requisição e resposta via http)
	EJS     => Linguagem de modelagem para criação de páginas Html utilizando Javascript
	Nodemon => Utilitário que reinicia automaticamente o servidor NodeJS quando houver qualquer alteração em nosso scripts
	npm     => Um gerenciador de pacotes Javascript
*/