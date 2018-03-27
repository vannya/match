/**
 * TEST DEMO LOG IN - Currently, not in use.
 * Demo ID was added manually into the database
 * and the username/password combo is named and
 * passed through the action.
 */

// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const mongoose = require("mongoose");

// const User = mongoose.model("users");

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id).then(user => {
//     done(null, user);
//   });
// });

// // Strategy to log in the test demo only.

// passport.use(new LocalStrategy({passReqToCallback: true},
//   function(req, username, password, done) {
//     User.findOne({ googleId: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       return done(null, user);
//     });
//   }
// ));
