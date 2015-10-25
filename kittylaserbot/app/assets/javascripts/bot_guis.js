$(function() {
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
});
