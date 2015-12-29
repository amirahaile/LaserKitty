var request = require('supertest'),
    express = require('express'),
    bot     = require('../modules/bot'),
    assert  = require('assert');

describe('GUI Controller', function(){
  var app = express();

  describe('GET /bot_status', function(){
    var getBotStatus = request(app).get('/bot_status').set('Accept', 'application/json');

    it('returns the bot\'s status and controller', function(done){
      getBotStatus.expect(200, function(error, result){
        assert.deepEqual(Object.keys(result.body), ['power', 'controller']);
        done();
      });
    });
  });

  describe('POST /bot_status', function(){
    var postBotStatus = request(app).post('/bot_status').set('Content-Type', 'application/json');

    it('updates the bot\'s status according to the received JSON', function(done){
      var oldBotStatus = bot.report();

      postBotStatus
        .send('{"power": "on", "controller": "manual"}')
        .end(function(error, result){});

      var newBotStatus = bot.report();

      assert.notEqual(newBotStatus.power, oldBotStatus.power);
      assert.equal(newBotStatus.power, 'on');
      assert.notEqual(newBotStatus.controller, oldBotStatus.controller);
      assert.equal(newBotStatus.controller, 'manual');
    });
  });
});
