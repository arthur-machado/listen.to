var express = require('express');
var router = express.Router();
var queryString = require('querystring');
var SpotifyWebApi = require('spotify-web-api-node');
const { response, use } = require('../app');
const { userInfo } = require('os');


/* home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Listen.to'});
});

/* Página de feed */

router.get('/feed', function(req, res, next) {
  res.render('feed', { title: 'Listen.to' });
});


/* Spotify login */
router.get('/login', function(req, res, next) {
  res.redirect('http://localhost:8888/login') //redireciona para o servidor de autenticação
});





module.exports = router;
