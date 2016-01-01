(function(){
  "use strict";
  var bot = require('../models/bot');

  var botController = {

    // NOTE: is `function(request, callback)` necessary?
    // NOTE: how is error handling happening here?

    botReport: function(request, callback){
      bot.report(request, function(result){
        callback(result);
      });
    },

    updateBot: function(request, callback){
      var power = request.body.power;
      var controller = request.body.controller;

      bot.update(power, controller, function(error, success){
        callback(error, success);
      });
    }
  };

  module.exports = botController;
}());
