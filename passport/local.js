const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// Strategy to log in the test demo only. 
passport.use(
  new LocalStrategy(async (username, password, done) => {
    const existingUser = await User.findOne({
      googleId: username
    });

    if (existingUser) {
      done(null, existingUser);
    }
  })
);
