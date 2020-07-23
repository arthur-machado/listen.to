var express = require('express');
var router = express.Router();
var SpotifyWebApi = require('spotify-web-api-node');

scopes = ['user-read-private', 'user-read-email','playlist-modify-public','playlist-modify-private'];

var spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_API_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.CALLBACK_URL,
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Listen.to'});
});

router.get('/feed', function(req, res, next) {
  res.render('feed', { title: 'Listen.to'});
});

/* Spotify login */

router.get('/login', function(req, res, next) {
  res.redirect('http://localhost:8888/login') //redireciona para o servidor de autenticação
})




module.exports = router;
