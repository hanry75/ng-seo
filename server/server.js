const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'posts.json'));
const middlewares = jsonServer.defaults();


server.use(middlewares);
/** 
server.use((req, res, next) => {
    if (req.headers.access && req.headers.access.split(' ')[1] === process.env.SECRET_KEY ) { 
      next();
    } else {
      res.sendStatus(401);
    }
});
*/
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/:resource/:id/show': '/:resource/:id'
  }));
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});