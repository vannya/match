const passport = require("passport");

module.exports = app => {
  app.get("/", (req, res) => {
    res.send("Vannya's app!");
  });

  app.get(
    "/api/googlelogin",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/api/googlelogin/redirect",
    passport.authenticate("google"),
    // (req, res) => {
    //   res.redirect("/auth");
    // }
  );
};
