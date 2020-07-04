var Debug = require('debug')('set-up:UCtoClient.Class')
class UCtoClient
{
  constructor(status,data){
    Debug("new Instance");  
    this.data=data;
    this.status=status; //
  };
}
module.exports = UCtoClient;
