  var Debug = require('debug')('set-up:ExpressJSImp');
  var IWebAPI = require('../IWebAPI');
  var express = require('express')
  var bodyParser = require('body-parser');
  var config = require('config');
  var _ = require('underscore');
  //Rest Controller
  class ExpressRest extends IWebAPI {
  constructor() {
    super();
    this.app = express()
    this.server=null;
    this.confjson=config.get('Webserver.express');
    //SET STATIC PATH
    this.app.use(express.static(this.confjson.static_path));

    Debug('ALLOWS CORS')
    //ALLOWS CORS
    this.app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });
    this.Promise = require('bluebird');
    this.app.use(bodyParser.json())
    this.router = express.Router();

    this.app.use(this.router);
  }

  run() {
    var self=this;
    return new Promise(
      (resolve)=>{
        self.server=this.app.listen(this.confjson.port, function () {
          var host = self.server.address().address;
          var port = self.server.address().port;
          Debug('server is listening @'+host+" "+port);
          resolve(true)
        });
      }
    )
  }

  close(){
    this.server.close();
  }

  read(uctoweb){
    Debug("Read Endpoint "+uctoweb.path)
    this.app.get("/"+uctoweb.path,function(req, res){
          let cb=function(status,message){res.status(status); res.send(message);}
          uctoweb.cb_response=cb;
          uctoweb.response=req.params.id
          uctoweb.cb_bl(uctoweb);
    });
  }
  create(uctoweb){
    Debug("Create Endpoint "+uctoweb.path)
    this.app.post("/"+uctoweb.path,function(req, res){
          let cb=function(status,message){res.status(status); res.send(message);}
          uctoweb.cb_response=cb;
          uctoweb.response=req.body
          uctoweb.cb_bl(uctoweb);
    });
  }
  delete(uctoweb){
    Debug("Delete Endpoint "+uctoweb.path)
      this.app.delete("/"+uctoweb.path,function(req, res){
        let cb=function(status,message){res.status(status); res.send(message);}
        uctoweb.cb_response=cb;
        uctoweb.response=req.params.id
        Debug("req.params.id")
        uctoweb.cb_bl(uctoweb);
      });
  }
  update(uctoweb){
    Debug("Update Endpoint "+uctoweb.path)
      this.app.patch("/"+uctoweb.path,function(req, res){
        let cb=function(status,message){res.status(status); res.send(message);}
        uctoweb.cb_response=cb;
        uctoweb.response=req.body
        uctoweb.cb_bl(uctoweb);
      });
  }
}


  module.exports = ExpressRest;
