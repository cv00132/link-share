// Require any middleware here.
const middleware = require("../middleware");

// Require your controllers here
const UserController = require('../controllers/user');
const LinkController = require('../controllers/link');
const CommentController = require('../controllers/comment');


module.exports = (app) => {
  // Add your routes here
  app.post('/users', UserController.create);
  app.post('/login', UserController.login);

  app.post('/:user_id/links', middleware.authenticate, LinkController.create);;
  app.get('/links', LinkController.list);

  app.post('/:user_id/:link_id/comment', middleware.authenticate, CommentController.create);
  app.get('/:user_id/:link_id/comments', CommentController.list);

};
