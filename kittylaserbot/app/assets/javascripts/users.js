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
  var accountTab = $("#account")[0];
  var inviteTab  = $("#invites")[0];
  var oauthTab   = $("#oauth-links")[0];
  var allTabs    = $(".nav-tabs li");

  // I would have consolidated this into one `.click` function,
  // but putting multiple objects on the click
  // (e.g. `$(inviteTab, oauthTab, accountTab).click()`)
  // seemed to work only once if *one* of the objects were clicked, 
  // not if *any* of them were.
  $(inviteTab).click(function(event) {
    event.preventDefault();
    $(".settings > div").css("display", "none");
    allTabs.removeClass("active");
    $(this).addClass("active");
    $(".settings .table-invites").css("display", "block");
  });

  $(oauthTab).click(function(event) {
    event.preventDefault();
    $(".settings > div").css("display", "none");
    allTabs.removeClass("active");
    $(this).addClass("active");
    $(".settings .account-link").css("display", "block");
  });

  $(accountTab).click(function(event) {
    event.preventDefault();
    $(".settings > div").css("display", "none");
    allTabs.removeClass("active");
    $(this).addClass("active");
    $(".settings .form-user").css("display", "block");
  });
});
