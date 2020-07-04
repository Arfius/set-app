var Debug = require('debug')('set-up:CRUD');
var UCtoDB = require('../../InfraData/UCtoDB')
class CRUD {

  constructor(MongooseModelName) {
    Debug("Create CRUD for "+MongooseModelName)
    this.mongoose = require('mongoose');
    this.Promise = require('bluebird');
    this.modelname=MongooseModelName;
    this.monguse=this.mongoose.model(this.modelname);
  }

  create(obj) {
    delete obj._id
    var _obj = this.monguse(obj);
    var response= new UCtoDB();
    return new this.Promise(function (resolve, reject) {
      _obj.save(
        function (err, res) {
            if (err) reject(err);
            else
            {
              resolve((res));
            }
          });
        });
  }

  delete(id) {
    var self=this;
    return new this.Promise(function (resolve, reject) {
      self.monguse.deleteOne({ _id: id },
        function (err, res) {
          if (err) reject(err);
          else
            resolve(res);
        });
    });
  }

  get(id) {
    var self=this;
    return new this.Promise(function (resolve, reject) {
      self.monguse.findOne({ _id: id },
        function (err, res) {
          if (err) reject(err);
          else
            resolve(res);
        });
    });
  }

  getAll() {
    var self=this;
    return new this.Promise(function (resolve, reject) {
      self.monguse.find({},
        function (err, res) {
          if (err) reject(err);
          else
          {
            var array=[];
            res.forEach(function(element){ array.push((element))})
            resolve(array);
          }
        });
    });
  }

  update(obj) {
    var id =obj._id;
    var self=this;
    return new this.Promise(function (resolve, reject) {
      self.monguse.findByIdAndUpdate({ _id: id },{$set:obj},{new:true},
        function (err, res) {
          if (err) reject(err);
          else
            resolve((res));
        });
    });
  }

  turnObjDBInModel(_obj)
  {
      if(_obj==null) return _obj;

      var ml= JSON.parse(JSON.stringify(_obj));
      var _m = new this.model();
      for(var key in _m) {
        _m[key] = ml[key];
      }

      //always below the for loop
      _m.id=ml._id;
      return _m;

  }

}

module.exports = CRUD;
