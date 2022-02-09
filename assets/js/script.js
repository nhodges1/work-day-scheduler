var tasks = {};

$("#due").click("div", function() {
    var text = $(this)
      .text()
      .trim();
  
    var textInput = $("<textarea>")
      .addClass("time-block")
      .val(text);

    $(this).replaceWith(textInput);

});


$(document).ready(function() {
  var date = moment().format("dddd, MMMM Do YYYY");
    
  document.getElementById("currentDay").textContent = date;
});


var time = moment();

  if (moment().isAfter(time)) {
    $("#due").addClass("past");
  }
  else if (moment().isBefore(time)) {
    $("#due").addClass("future");
  }
  else if (moment().isSame(time)) {
    $("#due").addClass("present");
  };
