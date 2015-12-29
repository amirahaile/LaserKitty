var botController = require('../../controllers/bot'),
    botModel      = require('../../models/bot'),
    assert        = require('assert');

describe('Bot Controller', function(){

  describe('botReport Property', function(){

    it('prepares the bot\'s status', function(){
      var report = botModel.report();

      botController.botReport(function(error, result){
        for(var property in report){
          assert.isTrue(result.hasOwnProperty(property), "returns result with " + property + " property");
          assert.equal(report[property], result[property]);
        }

        var reportKeys = Object.keys(report);
        var resultKeys = Object.keys(result);
        assert.equal(reportKeys.size, resultKeys.size);
      });
    });

    it('responds with a JSON object', function(){
      botController.botReport(function(error, result){
        assert.equal(typeof result, 'json');
      });
    });
  });

  describe('updateBot Property', function(){

    it('updates the bot', function(){
      var report = botModel.report();
      var request = {
        "power": "on",
        "controller": "manual"
      };

      botController.updateBot(request);

      var newReport = botModel.report();

      assert.notEqual(report.power, newReport.power);
      assert.equal(newReport.power, 'on');
      assert.notEqual(report.controller, newReport.controller);
      assert.equal(newReport.controller, 'manual');
    });

    // it('renders the GUI view', function(){
    //
    // });
  });
});
