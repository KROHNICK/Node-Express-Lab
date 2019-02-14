const express = require("express");
const helmet = require("helmet");

const db = require("../data/db.js");

const server = express();

server.use(helmet());
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

server.post("/api/posts", (req, res) => {
  const post = req.body;
  db.insert(post)
    .then(post => {
      if (!post.title || !post.contents) {
        return res.status(400).json({
          errorMessage: "Please provide title and contents for the post."
        });
      } else {
        res.status(201).json(post);
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "There was an error while saving the post to the database"
      });
    });
});

server.get("/api/posts/:id", (req, res) => {
  db.findById(req.params.id)
    .then(post => {
      if (!post) {
        res.status(404).json({
          message: "The post with the specified ID does not exist."
        });
      } else {
        res.status(200).json({ post });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "The post could not be removed"
      });
    });
});

server.delete("/api/posts/:id", (req, res) => {
  const postId = req.params.id;
  db.remove(postId)
    .then(deleted => {
      if (!post) {
        res.status(404).json({
          message: "The post with the specified ID does not exist."
        });
      } else {
        res.status(200).json(post);
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "The post could not be removed"
      });
    });
});

server.put("/api/posts/:id", (req, res) => {
  if (!req.body.title || !req.body.contents) {
    res.status(400).json({
      errorMessage: "Please provide title and contents for the post."
    });
  }
  db.update(req.params.id, req.body)
    .then(post => {
      if (!post) {
        res.status(404).json({
          message: "The post with the specified ID does not exist."
        });
      } else {
        db.findById(req.params.id)
          .then(updated => {
            res.status(200).json(updated);
          })
          .catch(err => {
            res.status(404).json({
              error: "Post not found after updating."
            });
          });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "The post information could not be modified."
      });
    });
});

module.exports = server;
