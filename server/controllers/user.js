const User = require("../models").User;
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');

module.exports = {
  // Add your routes here
  create (req, res) {
      let salt = bcrypt.genSaltSync(10);
      let hashedPass = bcrypt.hashSync(req.body.password, salt)
      User.create({
          name: req.body.name,
          email: req.body.email,
          password: hashedPass,
          salt: salt
     })
     .then(user => res.status(201).send(user))
     .catch(error => res.status(400).send(error));
 },
  list (req, res) {
       User.findAll()
       .then(contact => res.status(201).send(contact))
       .catch(error => res.status(400).send(error));
  }
}
