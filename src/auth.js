import passport from 'passport';
import OAuth2Strategy from 'passport-oauth2';
import requestCB from 'request';
import RSVP from 'rsvp';

const request = RSVP.denodeify(requestCB);

const url = 'https://staging-auth.wallstreetdocs.com/oauth/userinfo';

const authSetup = () => {

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  passport.use(new OAuth2Strategy({
      authorizationURL: 'https://staging-auth.wallstreetdocs.com/oauth/authorize',
      tokenURL: 'https://staging-auth.wallstreetdocs.com/oauth/token',
      clientID: 'coding_test',
      clientSecret: 'bwZm5XC6HTlr3fcdzRnD',
      callbackURL: "http://localhost:3000"
    },
    async function(accessToken, refreshToken, profile, cb) {
      const response = await request({
        url,
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Cache-Control": 'no-cache'
        }
      });
      return cb(null, JSON.parse(response.body));
    }
  ));
};

export default authSetup;