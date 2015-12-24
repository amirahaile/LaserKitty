var assert  = require('assert'),
    bot     = require('../../modules/bot');

describe('Bot Module', function(){

  describe('Power Property', function(){
    it('exists', function(done){
      assert.notEqual(typeof bot.power, "undefined");
      done();
    });

    it('is set to the default value', function(done){
      assert.equal(bot.power, 'off');
      done();
    });
  });

  describe('Controller Property', function(){
    it('exists', function(done){
      assert.notEqual(typeof bot.controller, "undefined");
      done();
    });

    it('is set to the default value', function(done){
      assert.equal(bot.controller, 'raspPi');
      done();
    });
  });

  describe('update()', function(){
    var power = 'on',
        controller = 'manual';

    it('only accepts \'on\' or \'off\' as the first param', function(done){
      assert.throws(function(){ bot.update('bazooga', controller); }, 'Error: Invalid power parameter.');
      assert.doesNotThrow(function(){ bot.update('on', controller); });
      assert.doesNotThrow(function(){ bot.update('off', controller); });
      done();
    });

    it('only accepts \'raspPi\' or \'manual\' as the second param', function(done){
      assert.throws(function(){ bot.update(power, 'bazing'); }, 'Error: Invalid controller parameter.');
      assert.doesNotThrow(function(){ bot.update(power, 'raspPi'); });
      assert.doesNotThrow(function(){ bot.update(power, 'manual'); });
      done();
    });

    it('switches the bot\'s status between \'on\' and \'off\'', function(done){
      bot.update('on', controller);

      assert.notEqual(bot.power, 'off', 'The bot is no longer \'off\'.');
      assert.equal(bot.power, 'on', 'The bot is now \'on\'.');

      bot.update('off', controller);

      assert.notEqual(bot.power, 'on', 'The bot is no longer \'on\'.');
      assert.equal(bot.power, 'off', 'The bot is now \'off\'.');
      done();
    });

    it('switches the bot\'s controller between \'raspPi\' and \'manual\'', function(done){
      bot.update(power, 'manual');

      assert.notEqual(bot.controller, 'raspPi', 'The bot is no longer \'raspPi\'.');
      assert.equal(bot.controller, 'manual', 'The bot is now \'manual\'.');

      bot.update(power, 'raspPi');

      assert.notEqual(bot.controller, 'manual', 'The bot is no longer \'manual\'.');
      assert.equal(bot.controller, 'raspPi', 'The bot is now \'raspPi\'.');
      done();
    });
  });
});
