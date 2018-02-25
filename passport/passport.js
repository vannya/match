const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../keys");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleSecretId,
      callbackURL: "/api/googlelogin/redirect",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
    }
  )
);