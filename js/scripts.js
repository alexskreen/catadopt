$(document).ready(function() {
  $("button#lightmode").click(function() {
  $("body").removeClass(); 
  });
  $("button#darkmode").click(function() {
    $("body").addClass("darkmode");
  });
  $("#test").click(function() {
    $("#flash").removeClass();
    $("#flash").addClass("highlight")
  });
  $("#test2").click(function() {
    $("#flash").removeClass();
  });
});