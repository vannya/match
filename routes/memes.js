const mongoose = require("mongoose");

const Meme = mongoose.model("memes");

module.exports = app => {

  // Returns all of a user's images 
  app.get("/api/memes", async (req, res) => {
    if (!req.user) {
      return;
    };
    const memes = await Meme.find({ _user: req.user.id });

    res.send(memes);
  });

  // Adds Image
  app.post("/api/newMeme", async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: "Login required" });
    }

    const meme = await new Meme({
      link: req.body.link,
      _user: req.user.id,
      tags: req.body.tags
    }).save();
    res.send(req.user);
  });

  // Deletes Images
  app.delete("/api/memes/del/:imageId", async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: "Login required" });
    }

    const meme = await Meme.findByIdAndRemove(req.params.imageId);

    return res.send(req.user);
  });

  // Fetches all distinct tags
  app.get("/api/tags", async (req, res) => {
    if (!req.user) {
      return;
    };
    const tags = await Meme.distinct("tags", function(err, result) {
      if (err) return handleError(err);

      console.assert(Array.isArray(result));
      return result;
    });
    res.send({tags: tags});
  })
};
