const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const mongoose = require("mongoose");
const keys = require("../keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleSecretId,
      callbackURL: "/api/googlelogin/redirect",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({
        googleId: profile.id
      });

      if (existingUser) {
        //Record was found
        done(null, existingUser);
      } else {
        //Record not found
        const user = await new User({
          googleId: profile.id
        }).save();
        done(null, user);
      }
    }
  )
);
