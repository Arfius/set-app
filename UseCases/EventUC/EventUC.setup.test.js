var Debug = require('debug')('set-up:EventUCTest');
var MainController=require('../../MainController/MainController');
var Event = require('../../Entities/Event')
var config = require('config');
var Profile = require('../../Entities/Profile')

var   chai = require('chai')
    , sinon = require('sinon')
    , should = require('should')
    , request = require('supertest'),
    expect = require('chai').expect;

describe("[Test EventUC]", function()
{
    var mainController;
    var confjson=config.get('Webserver.express');
    var url= confjson.url+":"+confjson.port;
    var _event=null;

    before(function (done) {
        mainController=new MainController();
        return done();
      });
  
    it('New Event', function(done) {
        var event = new Event();
        event.title='Barbeque';
        event.description='Summer bank holiday';
        event.owner='myprofileid';
        request(url)
         .post("/event")
         .send(event)
         .end(function(err, res)
         {
             if (err){
                throw err;
             }
             _event=res.body;
             _event.data.title.should.be.equal("Barbeque")
             res.status.should.be.equal(200);
             done();
         });

    });

    it('Read Event', function(done) {
        request(url)
        .get("/event/"+_event.data._id)
        .end(function(err, res)
        {
            if (err){
               throw err;
            }
            res.body.data.title.should.be.equal("Barbeque")
            res.status.should.be.equal(200);
            done();
        });
    });

    it('Update Event', function(done) {
        _event.data.title="NEW TITLE FOR BARBEQUE"
        request(url)
        .patch("/event")
        .send(_event.data)
        .end(function(err, res)
        {
            if (err){
               throw err;
            }
            res.body.data.title.should.be.equal("NEW TITLE FOR BARBEQUE")
            res.status.should.be.equal(200);
            _event=res.body
            done();
        });

    });

    it('Read Event 2', function(done) {
        request(url)
        .get("/event/"+_event.data._id)
        .end(function(err, res)
        {
            if (err){
               throw err;
            }
            res.body.data.title.should.be.equal("NEW TITLE FOR BARBEQUE")
            res.status.should.be.equal(200);
            done();
        });
    });

    it('Delete Event', function(done) {
        request(url)
        .delete("/event/"+_event.data._id)
        .end(function(err, res)
        {
            if (err){
               throw err;
            }
            res.body.data.n.should.be.equal(1)
            res.status.should.be.equal(200);
            done();
        });
    });

    after(function (done) {
        Debug("destroy all")
        mainController.destroy()
        return done();
      });


});
