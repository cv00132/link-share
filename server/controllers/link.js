const Link = require("../models").Link;
const User = require("../models").User;


module.exports = {
  // Add your routes here
  create (req, res) {
      console.log("The current user is ", req.user);
      Link.create({
          title: req.body.title,
          url: req.body.url
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
