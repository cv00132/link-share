// Require your controllers here
const UserController = require('../controllers/user');
const LinkController = require('../controllers/link');


module.exports = (app) => {
  // Add your routes here
  app.post('/users', UserController.create);
  app.get('/users', UserController.list);

  app.post('/:id/links', LinkController.create);
  app.get('/users/links', LinkController.list);

};
