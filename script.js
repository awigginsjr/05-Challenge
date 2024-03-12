// Wrapped all code that interacts with the DOM in a call to jQuery to ensure that
//the code isn't run until the browser has finished rendering all the elements
//in the html. 
$(document).ready(function () {
  $('.saveBtn').click(function () {

    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    console.log(value, time);

    localStorage.setItem(time, value);

    //show and hide notification when savedBtn is clicked.
   $('.notification')
    .addClass('show')
    .delay(3000)
    .queue(function () {
      $(this).removeClass('show').dequeue();

    });

  }); 

  
  // apply the past, present, or future class to each time.
  // block by comparing the id to the current hour. 
  function hourUpdater() {
    // current number of hours
    var currentHour = dayjs().hour();

    // loop over time blocks
    document.querySelectorAll('.time-block').forEach(function (block) {
      var blockHour = parseInt(block.id.split('-')[1]);

      // if we've moved past this time the color of time block will change.
      if (blockHour < currentHour) {
        block.classList.add('past');
        block.classList.remove('present', 'future');
      } else if (blockHour === currentHour) {
        block.classList.remove('past', 'future');
        block.classList.add('present');
      } else {
        block.classList.remove('past', 'present');
        block.classList.add('future');
      }
    });
  }

  hourUpdater();

  // display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('dddd, MMMM D YYYY'));

  // localStorage per hour.
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

});
