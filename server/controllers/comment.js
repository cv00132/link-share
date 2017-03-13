const Link = require("../models").Link;
const User = require("../models").User;
const Comment = require("../models").Comment;
const jwt = require("jwt-simple");
const appSecrets = require("../config/secrets");

module.exports = {
  create (req, res) {
    var token = req.headers['access-token'];
    var decoded = jwt.decode(token, appSecrets.jwtSecret);
    var userId = decoded.id;
    Comment.create({
      link_id: req.params.link_id,
      user_id: userId,
      body: req.body.body
    })
    .then(comment => res.status(201).send(comment))
    .catch(error => res.status(400).send(error));
  },

  list (req, res) {
    Comment.findAll({
      where: {
        user_id: req.params.user_id,
        link_id: req.params.link_id
      }
    })
      .then(comment => res.status(201).send(comment))
      .catch(error => res.status(400).send(error));
  }
};
