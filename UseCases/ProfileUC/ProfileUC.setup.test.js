var Debug = require('debug')('set-up:EventUCTest');
var MainController=require('../../MainController/MainController');
var Profile = require('../../Entities/Profile')
var config = require('config');

var   chai = require('chai')
    , sinon = require('sinon')
    , should = require('should')
    , request = require('supertest'),
    expect = require('chai').expect;


    function resolveAfter2Seconds(x) { 
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(x);
          }, 1900);
        });
      }
      
      async function f1( done) {
        var x = await resolveAfter2Seconds(10);
       done();
      }

describe("[Test ProfileUC]", function()
{
    var mainController;
    var confjson=config.get('Webserver.express');
    var url= confjson.url+":"+confjson.port;
    var _profile=null;
    
    before(function (done) {
        mainController=new MainController();
        f1(done);
       
      });
  
    it('New Profile', function(done) {
        var profile = new Profile();
        profile.name='John';
        profile.phone_number=182828;
        profile.staus='my status';
        request(url)
         .post("/profile")
         .send(profile)
         .end(function(err, res)
         {
             if (err){
                throw err;
             }
             _profile=res.body;
             _profile.data.name.should.be.equal("John")
             res.status.should.be.equal(200);
             done();
         });

    });

    it('Read Profile', function(done) {
        request(url)
        .get("/profile/"+_profile.data._id)
        .end(function(err, res)
        {
            if (err){
               throw err;
            }
            res.body.data.name.should.be.equal("John")
            res.status.should.be.equal(200);
            done();
        });
    });

    it('Update Profile', function(done) {
        _profile.data.name="New name for john"
        request(url)
        .patch("/profile")
        .send(_profile.data)
        .end(function(err, res)
        {
            if (err){
               throw err;
            }
            res.body.data.name.should.be.equal("New name for john")
            res.status.should.be.equal(200);
            _profile=res.body
            done();
        });
    });

    it('Read Profile 2', function(done) {
        request(url)
        .get("/profile/"+_profile.data._id)
        .end(function(err, res)
        {
            if (err){
               throw err;
            }
            res.body.data.name.should.be.equal("New name for john")
            res.status.should.be.equal(200);
            done();
        });
    });

    it('Delete Profile', function(done) {
        request(url)
        .delete("/profile/"+_profile.data._id)
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
