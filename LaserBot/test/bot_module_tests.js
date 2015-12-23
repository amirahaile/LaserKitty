var assert  = require('assert'),
    bot     = require('../modules/bot');

describe('Bot Module', function(){

  describe('Power Property', function(){
    it('exists and is set to the default value', function(done){
      assert.notEqual(typeof bot.power, "undefined");
      assert.equal(bot.power, 'off');
      done();
    });
  });

  describe('Controller Property', function(){
    it('exists and is set to the default value', function(done){
      assert.notEqual(typeof bot.controller, "undefined");
      assert.equal(bot.controller, 'RaspPi');
      done();
    });
  });

  describe('updateBotStatus()', function(){
    var power = 'on',
        controller = 'manual';

    it('always takes two parameters', function(done){
      assert.throws(bot.updateBotStatus, 'Error: Two parameters are required.');
      assert.throws(function(){ bot.updateBotStatus(power); }, 'Error: Two parameters are required.');
      assert.doesNotThrow(function(){ bot.updateBotStatus(power, controller); });
      done();
    });

    it('only accepts \'on\' or \'off\' as the first param', function(done){
      var badPower = 'bazooga',
          offPower = 'off';

      assert.throws(function(){ bot.updateBotStatus(badPower, controller); }, 'Error: Invalid power parameter.');
      assert.doesNotThrow(function(){ bot.updateBotStatus(power, controller); });
      assert.doesNotThrow(function(){ bot.updateBotStatus(offPower, controller); });
      done();
    });

    it('only accepts \'RaspPi\' or \'manual\' as the second param', function(done){
      var badController = 'bazing',
          piController = 'RaspPi';

      assert.throws(function(){ bot.updateBotStatus(power, badController); }, 'Error: Invalid controller parameter.');
      assert.doesNotThrow(function(){ bot.updateBotStatus(power, controller); });
      assert.doesNotThrow(function(){ bot.updateBotStatus(power, piController); });
      done();
    });

    it('switches the bot\'s status between \'on\' and \'off\'', function(done){
      bot.updateBotStatus(power, controller);

      assert.notEqual(bot.power, 'off', 'The bot is no longer \'off\'.');
      assert.equal(bot.power, 'on', 'The bot is now \'on\'.');
      done();
    });

    it('switches the bot\'s controller between \'raspPi\' and \'manual\'', function(done){
      bot.updateBotStatus(power, controller);

      assert.notEqual(bot.controller, 'raspPi', 'The bot is no longer controller by the RaspPi.');
      assert.equal(bot.controller, 'manual', 'The bot is being controlled manually.');
      done();
    });
  });
});
