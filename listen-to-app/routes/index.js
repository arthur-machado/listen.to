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
router.get('/login', (req, res) => {
  var redirect_uri = 'http://localhost:3000/feed'
  res.redirect('https://accounts.spotify.com/authorize' +
  '?response_type=code' +
  '&client_id=' + 'c7d6a5b8f7b745bba891c3323f1f61bf' +
  (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  '&redirect_uri=' + encodeURIComponent(redirect_uri)) +
  '&show_dialog=true';
})




module.exports = router;
