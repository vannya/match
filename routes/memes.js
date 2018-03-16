const mongoose = require("mongoose");

const Meme = mongoose.model("memes");

module.exports = app => {
  // Returns all of a user's memes
  app.get("/api/memes", async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: "Login required" });
    }
    const memes = await Meme.find({ _user: req.user.id });

    return res.send(memes);
  });

  // Adds Meme - Blocks Duplicate Memes, but allows for tag editing with new information
  app.post("/api/newMeme", async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: "Login required" });
    }

    let tags = req.body.tags.filter(tag => tag !== "");

    const meme = {
      link: req.body.link,
      _user: req.user.id,
      tags: tags
    };

    await Meme.findOneAndUpdate(
      {
        link: req.body.link,
        _user: req.user.id
      },
      meme,
      { upsert: true, new: true }
    );
    res.send(req.user);
  });

  // Deletes Meme
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
      return res.status(401).send({ error: "Login required" });
    }
    const tags = await Meme.find({ _user: req.user.id }).distinct(
      "tags",
      function(err, res) {
        if (err) return handleError(err);

        console.assert(Array.isArray(res));
        return res;
      }
    );
    return res.send(tags);
  });

  // Searches based on tag choice
  app.get("/api/tags/:tag", async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: "Login required" });
    }

    if (req.params.tag === "all") {
      const memes = await Meme.find({ _user: req.user.id });
      res.send(memes);
    } else {
      const memes = await Meme.find({
        _user: req.user.id,
        tags: req.params.tag
      });
      res.send(memes);
    }
  });
};
