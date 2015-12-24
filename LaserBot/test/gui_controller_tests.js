var request = require('supertest'),
    express = require('express'),
    bot     = require('../modules/bot'),
    assert  = require('assert');

describe('GUI Controller', function(){
  var app = express();

  describe('GET /gui', function(){
    it('responds successfully with a 200 status', function(done){
      app.get('/gui').expect(200, done);
    });

    // it('renders the GUI show view', function(done){
    // });
  });

  // this request is only ever made by the RaspPi; a view is unnecessary
  describe('GET /bot_status', function(){
    var getBotStatus = request(app).get('/bot_status').set('Accept', 'application/json');

    it('responds with JSON', function(done){
      getBotStatus
        .expect('Content-Type', 'application/json')
        .expect('Content-Length', '2')
        .expect(200, done);
    });

    it('returns the bot\'s status and controller', function(done){
      getBotStatus.expect(200, function(error, result){
        assert.deepEqual(Object.keys(result.body), ['power', 'controller']);
        done();
      });
    });
  });

  // this request is made by either the app's online user or the RaspPi
  describe('POST /bot_status', function(){
    var postBotStatus = request(app).post('/bot_status').set('Content-Type', 'application/json');

    it('accepts JSON', function(done){
      postBotStatus
        .send('{"power": "off", "controller": "manual"}')
        .end(callback);
    });

    it('updates the bot\'s status according to the received JSON', function(done){
      var oldBotStatus = bot.report();

      postBotStatus
        .send('{"power": "on", "controller": "manual"}')
        .end(callback);

      var newBotStatus = bot.report();

      assert.notEqual(newBotStatus.power, oldBotStatus.power);
      assert.equal(newBotStatus.power, 'on');
      assert.notEqual(newBotStatus.controller, oldBotStatus.controller);
      assert.equal(newBotStatus.controller, 'manual');
    });

    // it('renders the show view', function(done){
    // });
  });
});
