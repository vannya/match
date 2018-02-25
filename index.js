const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./keys.js");
require("./models/User");
require("./passport/local");
require("./passport/passport");

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());

// Requires cookie to be refreshed every 15 days.
app.use(
  cookieSession({
    maxAge: 15 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/oauth")(app);

app.listen(5000);
