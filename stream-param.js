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

var writeStream = db.documents.createWriteStream({
  uri: '/doc/example7.json',
  transform: ['js-transform', {no: 'sql'}]
});
writeStream.write('{ some: "streamdata" }', 'utf8');
writeStream.end();
