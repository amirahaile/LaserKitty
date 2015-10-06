var johnny5 = require("johnny-five");
var board = new johnny5.Board();

board.on("ready", function() {
  var servo = new johnny5.Servo(9);

  this.repl.inject({
    servo: servo
  });

  // servo.sweep();
  servo.to(0);
  servo.to(180, 1000, 6);
});
