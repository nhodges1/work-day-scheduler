$(document).ready(function() {
  // save button clicks
  $('.saveBtn').on('click', function() {
    // get values
    var value = $(this)
      .siblings('.description')
      .val();
    var time = $(this)
      /parent()
      .attr('id');

    // save in localStorage
    localStorage.setItem(time, value);

    // item saved notification
    $('.notification').addClass('show');

    // remove 'show' class after 5 sec
    setTimeout(function() {
      $('.notification').removeClass('show');
    }, 5000);
  });

  function hourUpdater() {
    // current number of hours
    var currentHour = moment().hours();

    // loop over time blocks
    $('.time-block').each(function() {
      var blockHour = parseInt(
        $(this)
          .attr('id')
          .split('-')[1]
      );

      // check if time has past
      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }
  
})


// display current day on page
$('#currentDay').text(moment().format('dddd, MMMM Do'));



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
