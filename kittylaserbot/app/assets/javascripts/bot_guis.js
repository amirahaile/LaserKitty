$(function() {
  // ARCHIVED VIDEO DROP-DOWN
  $("#video-archive").click(function(event) {
    event.preventDefault();

    var controlPanel = $("#controls");
    var videoPanel = $("#videos");

    controlPanel.animate({ top: 220 }, 100, function() {
      // once animation is complete
      controlPanel.css("display", "none");
      videoPanel.css("display", "block");
      videoPanel.animate({ top: 1 }, 300);
    });
  });

  // KEY PRESS
  $("body").on({
    "keydown": function(event) {
      var key;
      switch(event.which) {
        case 38: // up
          key = $("#key-up");
          break;
        case 40: // down
          key = $("#key-down");
          break;
        case 39: // right
          key = $("#key-right");
          break;
        case 37: // left
          key = $("#key-left");
          break;
      }
      key.addClass("pressed");
    },
    "keyup": function(event) {
      var key;
      switch(event.which) {
        case 38: // up
          key = $("#key-up");
          break;
        case 40: // down
          key = $("#key-down");
          break;
        case 39: // right
          key = $("#key-right");
          break;
        case 37: // left
          key = $("#key-left");
          break;
      }
      key.removeClass("pressed");
    }
  });
});
