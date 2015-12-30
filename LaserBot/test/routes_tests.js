var request = require('supertest'),
    express = require('express'),
    bot     = require('../models/bot'),
    routes  = require('../routes'),
    assert  = require('assert');

describe('Routes', function(){
  var app = express();

  describe('GET /gui', function(){
    it('responds successfully with a 200 status', function(done){
      app.get('/gui').expect(200, done);
    });

    // it('renders the GUI show view', function(done){
    // });
  });

  // this request is only ever made by the RaspPi
  // a view is unnecessary
  describe('GET /bot_status', function(){
    var getBotStatus = request(app).get('/bot_status').set('Accept', 'application/json');

    it('responds successfully with a 200 status', function(done){
      getBotStatus.expect(200, done);
    });

    it('responds with JSON', function(done){
      getBotStatus
        .expect('Content-Type', 'application/json')
        .expect('Content-Length', '2')
        .expect(200, done);
    });
  });

  // this request is made by either the app's online user or the RaspPi
  describe('POST /bot_status', function(){
    var postBotStatus = request(app).post('/bot_status').set('Content-Type', 'application/json');

    it('responds successfully with a 200 status', function(done){
      postBotStatus.expect(200, done);
    });

    it('accepts JSON', function(done){
      postBotStatus
        .send('{"power": "off", "controller": "manual"}')
        .end(function(error, result){});
    });

    // it('renders the show view', function(done){
    // });
  });
});
