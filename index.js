const express = require("express");
const server = express();
const db = require("./data/db");

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Server running.");
});

server.get("/api/posts", (req, res) => {
  db.find()
    .then(posts => res.json(posts))
    .catch(err => {
      res
        .status(500)
        .json({ error: "The posts information could not be retrieved." });
    });
});

server.listen(4000, () => {
  console.log("\n*** Server running on http://localhost:4000 ***\n");
});
