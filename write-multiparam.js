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

// @see http://docs.marklogic.com/guide/node-dev/documents#id_76998

db.documents.write({
  uri: '/doc/example5.json',
  contentType: 'application/json',
  content: { some: 'data' },
  transform: ['js-transform',{foo: 'bar', mark: 'logic'}]
});
