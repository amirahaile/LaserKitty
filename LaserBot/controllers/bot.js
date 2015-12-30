(function(){
  "use strict";
  var bot = require('../models/bot');

  var botController = {

    // NOTE: is `function(request, callback)` necessary?
    // NOTE: how is error handling happening here?
    
    botReport: function(){
      var report = bot.report();
      return report;
    },

    updateBot: function(request, callback){
      var power = request.power;
      var controller = request.controller;

      bot.update(power, controller);
    }
  };

  module.exports = botController;
}());
