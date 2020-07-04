var Debug = require('debug')('set-up:Profile.Class')
class Profile
{
  constructor(){
    this._id=null;
    this.name="";
    this.phone_number=0;
    this.status="";
  };
}
module.exports = Profile;
