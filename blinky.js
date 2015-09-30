var johnny5 = require("johnny-five");
var board = new johnny5.Board();

board.on("ready", function(){
  var led = new johnny5.Led(12);
  led.blink(500);
});
