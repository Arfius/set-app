var Debug = require('debug')('set-up:EventUCTest');
var MainController=require('../../MainController/MainController');
var Task = require('../../Entities/Task')
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
          }, 1500);
        });
      }
      
      async function f1( done) {
        var x = await resolveAfter2Seconds(10);
       done();
      }

describe("[Test Task]", function()
{
    var mainController;
    var confjson=config.get('Webserver.express');
    var url= confjson.url+":"+confjson.port;
    var _task=null;
    
    before(function (done) {
        mainController=new MainController();
        f1(done);
       
      });
  
    it('New Task', function(done) {
        var task = new Task();
        task.title='task1234';
        Debug(task)
        request(url)
         .post("/task")
         .send(task)
         .end(function(err, res)
         {
             if (err){
                throw err;
             }
             _task=res.body;
             _task.data.title.should.be.equal("task1234")
             res.status.should.be.equal(200);
             done();
         });

    });

    it('Read Task', function(done) {
        request(url)
        .get("/task/"+_task.data._id)
        .end(function(err, res)
        {
            if (err){
               throw err;
            }
            res.body.data.title.should.be.equal("task1234")
            res.status.should.be.equal(200);
            done();
        });
    });

    it('Update Task', function(done) {
        _task.data.title="1234task"
        request(url)
        .patch("/task")
        .send(_task.data)
        .end(function(err, res)
        {
            if (err){
               throw err;
            }
            res.body.data.title.should.be.equal("1234task")
            res.status.should.be.equal(200);
            _task=res.body
            done();
        });
    });

    it('Read Task 2', function(done) {
        request(url)
        .get("/task/"+_task.data._id)
        .end(function(err, res)
        {
            if (err){
               throw err;
            }
            res.body.data.title.should.be.equal("1234task")
            res.status.should.be.equal(200);
            done();
        });
    });

    it('Delete Task', function(done) {
        request(url)
        .delete("/task/"+_task.data._id)
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
