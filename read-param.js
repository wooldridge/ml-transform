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

db.documents.read({
  uris: '/doc/example.json',
  transform: ['js-transform', {no: 'sql'}]
}).result(function(result) {
    console.log(JSON.stringify(result, null, 2));
  },
  function(error) {
    console.log(JSON.stringify(error, null, 2));
  });
