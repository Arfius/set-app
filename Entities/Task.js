var Debug = require('debug')('set-up:Task.Class')
class Task
{
  constructor(){
    this._id=null;
    this.title="";
    this.description="";
    this.deadline=new Date();
    this.owner=""
    this.status=0
  };
}
module.exports = Task;
