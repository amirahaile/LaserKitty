var johnny5 = require("johnny-five"), board, button;
board = new johnny5.Board();

board.on("ready", function(){
  button = new johnny5.Button(2);

  board.repl.inject({
    button: button
  });

  button.on("down", function(){
    console.log("down");
  });

  button.on("hold", function(){
    console.log("hold");
  });

  button.on("up", function(){
    console.log("up");
  });
});
