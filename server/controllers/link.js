const Link = require("../models").Link;
const User = require("../models").User;
const jwt = require("jwt-simple");
const appSecrets = require("../config/secrets");


module.exports = {
  // Add your routes here
  create (req, res) {
    var token = req.headers['access-token'];
    var decoded = jwt.decode(token, appSecrets.jwtSecret);
    var userId = decoded.id;

    Link.create({
    title: req.body.title,
    url: req.body.url,
    user_id: userId,
    })
    .then(link => res.status(201).send(link))
    .catch(error => res.status(400).send(error));
 },

  list (req, res) {
       Link.findAll({
           order: [ [ 'createdAt', 'DESC' ]]
       })
       .then(contact => res.status(201).send(contact))
       .catch(error => res.status(400).send(error));
  }
}
