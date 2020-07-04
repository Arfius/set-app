var Debug = require('debug')('set-up:MongoImp.Class')
var IDatabase = require('../IDatabase');
var _ = require('underscore');
var config = require('config');
var CRUD = require('./CRUD');

class MongoDbImp extends IDatabase {

  constructor() {
    super();
    Debug("Load Mongo")
    this.confjson=config.get('Database.mongodb');
    this.connection_string=this.confjson.url+":"+this.confjson.port+"/"+this.confjson.name;
    this.mongoose = require('mongoose');
  }

  open()
  {
    Debug('Opening Mongo...');
    //load schema
    var self=this;
    this.mongoose.connect(this.connection_string,{ useNewUrlParser: true });
    this.db=this.mongoose.connection;
    return new Promise(
        (resolve)=>{
          self.db.on('error', function(){console.error.bind(console, 'errore durante la connessione'); resolve(false);});
          self.db.once('open', function callback () {
            Debug('DB Mongo Aperto');
            require('require-dir')('./Schema');   
            // create istance of class
            self.event=new CRUD("event");
            self.task=new CRUD("task");
            self.profile=new CRUD("profile");
            resolve(true);
        });
      }
    )
  }

  close()
  {
    this.db.close();
  }
}

module.exports = MongoDbImp;