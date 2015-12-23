(function(){
  "use strict";

  var botModule = {

    power: 'off',

    controller: 'RaspPi',

    updateBotStatus: function updateBotStatus(power, controller){
      var validPower, validController;

      if(power == "off" || power == "on"){
        validPower = true;
      } else {
        throw new Error('Invalid power parameter.');
      }

      if(controller == "RaspPi" || controller == "manual"){
        validController = true;
      } else {
        throw new Error('Invalid controller parameter.');
      }

      if (validPower && validController) {
        this.power = power;
        this.controller = controller;
      } else {
        throw new Error('Two parameters are required.');
      }
    }
  };

  module.exports = botModule;
}());
