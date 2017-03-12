// Require any middleware here.
const middleware = require("../middleware");

// Require your controllers here
const UserController = require('../controllers/user');
const LinkController = require('../controllers/link');


module.exports = (app) => {
  // Add your routes here
  app.post('/users', UserController.create);
  app.get('/users', UserController.list);
  app.post('/login', UserController.login);

  app.post('/links', middleware.authenticate, LinkController.create);;
  app.get('/users/links', LinkController.list);

};
