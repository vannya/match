const passport = require("passport");

module.exports = app => {
  app.get("/", (req, res) => {
    res.send("Vannya's app!");
  });

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

  // Test User Login for Match demonstration purposes
  app.post("/api/testUser", function(req, res, next) {
    passport.authenticate("local", function(err, user, info) {
      if (err) {
        return next(err); // Error 500
      }

      if (!user) {
        //Authentication failed
        return res.json(401, { error: info.message });
      }
      //Authentication successful
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.send(user);
      });
    })(req, res, next); 
  });
};
