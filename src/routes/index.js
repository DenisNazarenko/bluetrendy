import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/dashboard', (req, res) => {
  const { user } = req;
  if (user) {
    res.render('profile', { user });
  } else {
    res.render('index');
  }
});

router.get('/login', passport.authenticate('oauth2'));

router.get('/', passport.authenticate('oauth2', {
    failureRedirect: '/index',
    successRedirect: '/dashboard'
  }
));

export default router;
