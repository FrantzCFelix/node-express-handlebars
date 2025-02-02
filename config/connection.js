'use strict';

// Set up MySQL connection.
const mysql = require('mysql');

let connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'FroonceTheDev_170',
    database: 'burgers_db'
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
