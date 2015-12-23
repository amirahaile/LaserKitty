var app     = require('../app'),
    request = require('supertest'),
    agent   = request.agent(app),
    assert  = require('assert'),
    bot = require('../modules/bot');

describe('Bot Module', function(){

  describe('Power Property', function(){
    it('exists', function(done){
      should.exist(bot.power);
    });

    it('is set to the default, \'off\'', function(done){
      assert.equal(bot.power, 'off');
    });
  });

  describe('Controller Property', function(){
    it('exists', function(done){
      should.exist(bot.controller);
    });

    it('is set to the default, \'RaspPi\'', function(done){
      assert.equal(bot.controller, 'RaspPi');
    });
  });

  describe('updateBotStatus()', function(){
    var power = 'on',
        controller = 'manual';
    bot.updateBotStatus(power, controller);
    var newBotStatus = bot.reportBotStatus();

    it('switches the bot\'s status between \'on\' and \'off\'', function(done){
      assert.notEqual(newBotStatus.power, 'off', 'The bot is no longer \'off\'.');
      assert.equal(newBotStatus.power, 'on', 'The bot is now \'on\'.');
    });

    it('switches the bot\'s controller between \'raspPi\' and \'manual\'', function(done){
      assert.notEqual(newBotStatus.controller, 'raspPi', 'The bot is no longer controller by the RaspPi.');
      assert.equal(newBotStatus.controller, 'manual', 'The bot is being controlled manually.');
    });
  });

  describe('reportBotStatus()', function(){

    it('returns the bot\'s power status', function(done){
      assert.equal(bot.power, 'off');
    });

    it('returns the bot\'s controller', function(done){
      assert.equal(bot.controller, 'RaspPi');
    });
  });
});
