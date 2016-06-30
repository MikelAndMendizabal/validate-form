$(document).ready(function(){
$("#submit").click(function(){

//reset CSS values and p text
  $("p").text(" ");
  $("#name").css("border-color","grey");
  $("#last_name").css("border-color","grey");

//decalre variables
  var namevar = $("#name").val();
  var lastnamevar = $("#last_name").val();
//check if name field was filled
  if(!namevar)
  {
    $("#name").css("border-color","red");
    $("p").text("Missing name.");
  }
//check if last name field was filled
  if(!lastnamevar)
  {
    $("#last_name").css("border-color","red");
    $("p").append(" Missing last name.");
  }

});
});
