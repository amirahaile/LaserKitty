(function(){
  "use strict";

  var botModel = {

    power: 'off',

    controller: 'raspPi',

    report: function report(){
      var status = {
        "power": this.power,
        "controller": this.controller
      };

      return status;
    },

    update: function update(power, controller){
      var validPower, validController;

      if(power == "off" || power == "on"){
        validPower = true;
      } else {
        throw new Error('Invalid power parameter.');
      }

      if(controller == "raspPi" || controller == "manual"){
        validController = true;
      } else {
        throw new Error('Invalid controller parameter.');
      }

      if (validPower || validController) {
        this.power = power;
        this.controller = controller;
      }
    }
  };

  module.exports = botModel;
}());
