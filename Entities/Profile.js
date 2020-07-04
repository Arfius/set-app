var Debug = require('debug')('set-up:Profile.Class')
class Profile
{
  constructor(){
    this._id=null;
    this.name="";
    this.photo="";
    this.phone_number=0;
    this.stars=0;
    this.status="";
  };
}
module.exports = Profile;
