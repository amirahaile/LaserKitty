$(function() {

  var buttonsDiv = $("#login-buttons");
  var formDiv;

  $("#btn-register").click(function(event) {
    event.preventDefault();

    formDiv = $("#form-signup");

    buttonsDiv.css("display", "none");
    formDiv.css("display", "block");
  });

  $("#btn-login").click(function(event) {
    event.preventDefault();

    formDiv = $("#form-login");

    buttonsDiv.css("display", "none");
    formDiv.css("display", "block");
  });

  // returns the login buttons
  $(".btn-back-login-btns").click(function(event) {
    event.preventDefault();

    buttonsDiv.css("display", "block");
    formDiv.css("display", "none");
  });
});
