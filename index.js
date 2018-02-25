const express = require("express");
const passport = require("passport");
const keys = require("./keys.js");
require("./passport/passport");


const app = express();


require("./routes/oauth")(app);

app.listen(5000);
