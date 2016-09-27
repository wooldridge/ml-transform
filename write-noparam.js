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

db.documents.write({
  uri: '/doc/example2.json',
  contentType: 'application/json',
  content: { some: 'data' },
  transform: ['js-transform']
})
