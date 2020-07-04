var Debug = require('debug')('set-up:Database.Factory')
var MongoDB = require('./MongoDB/MongoImp');
class DBFactory {
  constructor(type){this.type=type;}

  instace() {
      switch(this.type){
          case 'mongodb':
            this.database = new MongoDB();
          break;
      }
      return this.database;
  }
}

  module.exports = DBFactory;
