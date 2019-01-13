// const passport = require('passport');
// const express = require('express');
// const app = express();

// module.exports = app => {
//     app.get('/auth/google', passport.authenticate('google', {
//         scope: ['profile', 'email']
//     })
//     );

//     app.get('/auth/google/callback', passport.authenticate('google'),(req,res)=>{
//         res.redirect('/login');
//     });

//     app.get('/api/logout', (req, res) => {
//         req.logout();
//         res.redirect('/');
//     });

//     app.get('/api/current_user', (req, res) => {
//         res.send(req.user);
//     });
// };

const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({ hi: 'there' });
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
}