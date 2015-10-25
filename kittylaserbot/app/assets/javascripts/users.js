$(function() {
  // LOGIN
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

  // SETTINGS PAGE
  var accountTab = $("#account");
  var inviteTab = $("#invites");
  var allTabs = $(".nav-tabs li");

  $(inviteTab, accountTab).click(function(event) {
    event.preventDefault();
    $(allTabs).removeClass("active");
    $(this).addClass("active");
    $(".settings div").css("dispaly", "none");

    if (this === inviteTab[0]) {
      $(".settings .table-invites").css("display", "block");
    }

    if (this === accountTab[0]) {
      $(".settings .form-user").css("display", "block");
    }
  });
});
