var assert  = require('assert'),
    bot     = require('../../models/bot');

describe('Bot Model', function(){

  describe('Power Property', function(){
    it('exists', function(){
      assert.notEqual(typeof bot.power, "undefined");
    });

    it('is set to either \'on\' or \'off\'', function(){
      var properPropValue = (bot.power == "on" || bot.power == "off") ? true : false;
      assert.equal(properPropValue, true);
    });
  });

  describe('Controller Property', function(){
    it('exists', function(){
      assert.notEqual(typeof bot.controller, "undefined");
    });

    it('is set to either \'raspPi\' or \'manual\'', function(){
      var properPropValue = (bot.controller == "raspPi" || bot.controller == "manual") ? true : false;
      assert.equal(properPropValue, true);
    });
  });

  describe('report()', function(){
    var botReport;

    beforeEach(function(done){
      botReport = bot.report();
      done();
    });

    it('is a function', function(){
      assert.equal(typeof bot.report, "function");
    });

    it('returns an object', function(){
      assert.equal(typeof botReport, "object");
      assert.equal(Object.keys(botReport).length, 2);
    });

    it('relays the bot\'s current status', function(){
      assert.equal(botReport.power, bot.power);
      assert.equal(botReport.controller, bot.controller);
    });
  });

  describe('update()', function(){

    it('is a function', function(){
      assert.equal(typeof bot.update, "function");
    });

    it('only accepts \'on\' or \'off\' as the first param', function(done){
      assert.throws(
        function(){
          bot.update('bazooga', 'manual', function(error, success){
            if (error) { throw (error); }
          });
        }, Error, 'Error: Invalid power parameter.'
      );

      assert.doesNotThrow(
        function(){
          bot.update('on', 'manual', function(error, success){
            if (error) { throw (error); }
          });
        }, Error
      );

      assert.doesNotThrow(
        function(){
          bot.update('off', 'manual', function(error, success){
            if (error) { throw (error); }
          });
        }, Error
      );

      done();
    });

    it('only accepts \'raspPi\' or \'manual\' as the second param', function(done){
      assert.throws(
        function(){
          bot.update('on', 'bazing', function(error, success){
            if (error) { throw(error); }
          });
        }, Error, 'Error: Invalid controller parameter.'
      );

      assert.doesNotThrow(
        function(){
          bot.update('on', 'raspPi', function(error, success){
            if (error) { throw(error); }
          });
        }, Error
      );

      assert.doesNotThrow(
        function(){
          bot.update('on', 'manual', function(error, success){
            if (error) { throw(error); }
          });
        }, Error
      );

      done();
    });

    it('switches the bot\'s status between \'on\' and \'off\'', function(done){
      bot.update('on', 'manual', function(error, success){
        if (error) { throw(error); }
      });

      assert.notEqual(bot.power, 'off', 'The bot is no longer \'off\'.');
      assert.equal(bot.power, 'on', 'The bot is now \'on\'.');

      bot.update('off', 'manual', function(error, success){
        if (error) { throw(error); }
      });

      assert.notEqual(bot.power, 'on', 'The bot is no longer \'on\'.');
      assert.equal(bot.power, 'off', 'The bot is now \'off\'.');

      done();
    });

    it('switches the bot\'s controller between \'raspPi\' and \'manual\'', function(done){
      bot.update('on', 'manual', function(error, success){
        if (error) { throw(error); }
      });

      assert.notEqual(bot.controller, 'raspPi', 'The bot is no longer \'raspPi\'.');
      assert.equal(bot.controller, 'manual', 'The bot is now \'manual\'.');

      bot.update('on', 'raspPi', function(error, success){
        if (error) { throw(error); }
      });

      assert.notEqual(bot.controller, 'manual', 'The bot is no longer \'manual\'.');
      assert.equal(bot.controller, 'raspPi', 'The bot is now \'raspPi\'.');

      done();
    });
  });
});
