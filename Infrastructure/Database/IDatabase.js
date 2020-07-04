var Debug = require('debug')('set-up:IDataBase.Interface')
class IDataBase {
    constructor(){}

    open(){}  // return void
    close(){}  // return void

    //CRUD EVENTS
    create(){}; // create promise
    delete(){}; // delete promise
    update(){}; // update promise
    get(){}; // return promise
    getAll(){};
}
module.exports = IDataBase;
