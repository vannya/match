const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = app => {

  // Google Login
  app.get(
    "/api/googlelogin",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // Google Callback
  app.get(
    "/api/googlelogin/redirect",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  // Gets Current User Info
  app.get("/api/currentUser", (req, res) => {
    res.send(req.user);
  });

  // Logout Handler
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Updates User Info
  app.put("/api/currentUser", (req, res) => {
    User.findById(req.user._id, (err, user) => {
      if(err) {
        res.status(500).send(err);
      } else {
        user.googleId = req.body.googleId;
        user.theme = req.body.theme || user.theme;

        user.save((err, user) => {
          if(err) {
            res.status(500).send(err);
          }
          res.status(200).send(user);
        });
      }
    })
  });


  // // Test User Login for demonstration purposes
  // app.post("/api/testUser", function(req, res, next) {
  //   passport.authenticate("local", function(err, user, info) {
  //     if (err) {
  //       return next(err); // Error 500
  //     }

  //     if (!user) {
  //       //Authentication failed
  //       return res.json(401, { error: info.message });
  //     }
  //     //Authentication successful
  //     req.logIn(user, function(err) {
  //       if (err) {
  //         return next(err);
  //       }
  //       return res.send(user);
  //     });
  //   })(req, res, next); 
  // });
};
