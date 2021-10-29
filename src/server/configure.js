const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const api = jsonServer.router('db.json');

module.exports = app => {
  app.use(bodyParser.json());
  app.use('/api', api);
}