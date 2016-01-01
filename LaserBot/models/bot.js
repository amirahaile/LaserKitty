(function(){
  "use strict";

  var botModel = {

    power: 'off',
    controller: 'raspPi',

    report: function(request, callback){
      var status = {
        "power": this.power,
        "controller": this.controller
      };

      callback(status);
    },

    update: function(power, controller, callback){
      var validPower, validController,
          success = false,
          error = [];

      if(power == "off" || power == "on"){
        validPower = true;
      } else {
        error.push(new Error('Invalid power parameter.'));
      }

      if(controller == "raspPi" || controller == "manual"){
        validController = true;
      } else {
        error.push(new Error('Invalid controller parameter.'));
      }

      if(validPower && validController) {
        this.power = power;
        this.controller = controller;
        success = true;
      }

      callback(error, success);
    }
  };

  module.exports = botModel;
}());
