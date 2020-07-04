var ExpressJSImp = require('./ExpressJS/ExpressJSImp');
var Debug = require('debug')('set-up:RestFactory');

class WebAPIFactory {
  constructor(type){ this.type=type; Debug('WEB: '+this.type);}
  instance() {
      switch(this.type) {
          case 'express':
            this.restapi = new ExpressJSImp();
          break;
      }
      return this.restapi;
  }
}

module.exports = WebAPIFactory;
