(function(){
  "use strict";
  var bot = require('../models/bot');

  var botController = {

    // NOTE: is `function(request, callback)` necessary?
    // NOTE: how is error handling happening here?

    botReport: function botReport(callback){
      bot.report(function(result){
        callback(result);
      });
    },

    updateBot: function updateBot(request, callback){
      request = JSON.parse(request);
      var power = request.power;
      var controller = request.controller;

      bot.update(power, controller, function(error, success){
        callback(error, success);
      });
    }
  };

  module.exports = botController;
}());
