var Debug = require('debug')('set-up:UCtoWeb.Class')
class UCtoWeb
{
  constructor(){
    Debug("new Instance");  
    this.param;
    this.path;
    this.response;
    this.cb_bl;
    this.infra;
    this.cb_response; // cb(status,json_message)
  };
}
module.exports = UCtoWeb;
