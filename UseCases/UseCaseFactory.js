var EventUC = require('./EventUC/EventUC');
var ProfileUC = require('./ProfileUC/ProfileUC');
var TaskUC = require('./TaskUC/TaskUC');
var config = require('config');
var Debug = require('debug')('set-up:UseCaseFactory');

class CasiUsoFactory {

  constructor(type,infra) {
    this.type=type;
    this.infra=infra;
    Debug("created")
  }

  instance() {
      switch(this.type) {
          case 'Event':
            this.casouso = new EventUC(this.infra);
          break;
          case 'Profile':
          this.casouso = new ProfileUC(this.infra);
          break;
          case 'Task':
          this.casouso = new TaskUC(this.infra);
          break;
      }
      return this.casouso;
  }

}
module.exports = CasiUsoFactory;
