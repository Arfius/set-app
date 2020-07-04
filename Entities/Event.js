var Debug = require('debug')('set-up:Event.Class')
class Event
{
  constructor(){
    this._id=null;
    this.title="";
    this.description="";
    this.deadline=new Date();
    this.tasks=[];
    this.owner="";
    this.status=0; 
  };
}
module.exports = Event;
