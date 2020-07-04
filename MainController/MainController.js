var Debug = require('debug')('set-up:MainController')

class MainController
{
  constructor(){
    Debug("Load MainController")
  
    var Infrastructure = require('../Infrastructure/infrastructure');
    this.infra = new Infrastructure();
    if(this.infra.run()){
      Debug("Run Use Cases...")
      var UseCaseFactory = require('../UseCases/UseCaseFactory');
      this.eventUC = new UseCaseFactory("Event",this.infra).instance();
      this.profileUC = new UseCaseFactory("Profile",this.infra).instance();
      this.TaskUC = new UseCaseFactory("Task",this.infra).instance();
    }
    
    /*var UseCaseFactory = require('../UseCases/UseCaseFactory');
    this.eventUC = new UseCaseFactory("Event",this.infra).instance();
    this.profileUC = new UseCaseFactory("Profile",this.infra).instance();*/
    
  };

  destroy(){
    this.infra.closeAll();
  }
}


module.exports = MainController;
