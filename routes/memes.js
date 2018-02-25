const mongoose = require("mongoose");

const Meme = mongoose.model("memes");

module.exports = app => {
  app.get("/api/memes", async (req, res) => {
    const memes = await Meme.find({ _user: req.user.id });

    res.send(memes);
  });

  app.post("/api/newMeme", async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: "Login required" });
    }

    const meme = await new Meme({
      link: req.body.link,
      _user: req.user.id
    }).save();
    res.send(req.user);
  });

  app.delete("/api/memes/del/:imageId", async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: "Login required" });
    }

    const meme = await Meme.findByIdAndRemove(req.params.imageId);

    return res.send(req.user);
  });
};
