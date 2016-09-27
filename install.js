var config = require('./config'),
    marklogic = require('marklogic'),
    fs = require('fs');

var db = marklogic.createDatabaseClient({
  host: config.host,
  port: config.database.port,
  user: config.auth.user,
  password: config.auth.pass,
  authType: 'digest'
});

db.config.transforms.write({
  name: 'js-transform',
  format: 'javascript',
  source: fs.createReadStream('./transform.sjs'),
  // everything below this is optional metadata
  title: 'Example JavaScript Transform',
  description: 'An example of an SJS read/write transform',
  provider: 'MarkLogic',
  version: 1.0
}).result(function(response) {
  console.log('Installed transform: ' + response.name);
}, function(error) {
  console.log(JSON.stringify(error, null, 2));
});
