var Debug = require('debug')('set-up:Database.Class')
var Database = require('./Database/DBFactory');
var Web= require('./WebAPI/WebAPIFactory');

class Infrastructure {
        constructor(){
        Debug("Load Database")
        this.db = new Database("mongodb").instace();

        Debug("Web API")
        this.web = new Web("express").instance();
    }

    async run(){
        var web;
        var db;
        await this.web.run().then((res)=>{Debug("runWebAsyncEND");web=res;})    
        await this.db.open().then((res)=>{Debug("runDBAsyncEND");db=res;})    
        return web&db;
    }

    closeAll(){
        this.db.close();
        this.web.close();
    }
}
module.exports = Infrastructure;
