'use strict';

// Set up MySQL connection.
const mysql = require('mysql');

let connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'r4919aobtbi97j46.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'wx6n3o7tf2flm3q8',
    password: 'efjyuopjtt5g4dwt',
    database: 'h1eykxs5kcvdbvij'
  });
}

 

// Make connection.
connection.connect(err => {
  if (err) {
    console.error('error connecting', err.stack);
    return;
  }
  console.log(`connected with id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
