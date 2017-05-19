import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/login', passport.authenticate('oauth2'));

router.get('/', function (req, res, next) {
  if (req.query.code) {
    next();
  } else {
    res.render('index');
  }
  }, passport.authenticate('oauth2', {
      failureRedirect: '/'
    }
  ), (req, res) => {
  const { user } = req;
  res.render('profile', { user });
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

export default router;

