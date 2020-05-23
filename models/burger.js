'use strict';

// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
  all: function(cb) {
    orm.all('burgers', (res) => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(name, cb) {
    orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
    // orm.create('burgers', cols, vals, function(res) {
    //   cb(res);
    //});
  },
  update: function(objColVals, condition, cb) {
    orm.update('burgers', objColVals, condition, (res) => {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete('burgers', condition, (res) => {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
