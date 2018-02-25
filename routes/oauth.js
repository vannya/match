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
      res.redirect("/test");
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
};
