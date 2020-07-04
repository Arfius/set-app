var Debug = require('debug')('set-up:ProfileUC');
var UCtoWeb = require('../../Infrastructure/InfraData/UCtoWeb')
var UCtoClient = require('../../Infrastructure/InfraData/UCtoClient')

class ProfileUC {

  constructor(infra) {
    this.infra=infra;
    this.endpoint="profile/";
    this._read();
    this._create();  
    this._delete();  
    this._update();  

    }

    _read(){
      var uctoweb = new UCtoWeb();
      uctoweb.path=this.endpoint+(":id")
      Debug("Read "+uctoweb.path)
      uctoweb.cb_bl = this.read_bl
      uctoweb.infra=this.infra;
      this.infra.web.read(uctoweb);
    }
    _create(){
      var uctoweb = new UCtoWeb();
      uctoweb.path=this.endpoint
      Debug("Create "+uctoweb.path)
      uctoweb.cb_bl=this.create_bl;
      uctoweb.infra=this.infra;
      this.infra.web.create(uctoweb);
    }
    _update(){
      var uctoweb = new UCtoWeb();
      uctoweb.path=this.endpoint
      Debug("Update "+uctoweb.path)
      uctoweb.cb_bl=this.update_bl;
      uctoweb.infra=this.infra;
      this.infra.web.update(uctoweb);
    }
    _delete(){
      var uctoweb = new UCtoWeb();
      uctoweb.path=this.endpoint+":id"
      Debug("Delete "+uctoweb.path)
      uctoweb.cb_bl=this.delete_bl;
      uctoweb.infra=this.infra;
      this.infra.web.delete(uctoweb);
    }

    //-------------------------
    read_bl(istance){
      istance.infra.db.profile.get(istance.response).then(
        (res)=>{
          var uc = new UCtoClient(200,res)
          istance.cb_response(200,uc)
        },
        (rej)=>{
          var uc = new UCtoClient(200,rej)
          istance.cb_response(200,uc)
        }
      )
    }
    create_bl(istance){
      istance.infra.db.profile.create(istance.response).then(
        (res)=>{
          var uc = new UCtoClient(200,res)
          istance.cb_response(200,uc)
        },
        (rej)=>{
          var uc = new UCtoClient(200,rej)
          istance.cb_response(200,uc)
        }
      )
    }
    update_bl(istance){
      istance.infra.db.profile.update(istance.response).then(
        (res)=>{
          var uc = new UCtoClient(200,res)
          istance.cb_response(200,uc)
        },
        (rej)=>{
          var uc = new UCtoClient(200,rej)
          istance.cb_response(400,uc)
        }
      )
    }

    delete_bl(istance){
      istance.infra.db.profile.delete(istance.response).then(
        (res)=>{
          var uc = new UCtoClient(200,res)
          istance.cb_response(200,uc)
        },
        (rej)=>{
          var uc = new UCtoClient(200,rej)
          istance.cb_response(200,uc)
        }
      )
    }
  
}

module.exports = ProfileUC;
