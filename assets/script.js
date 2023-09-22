// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  //create object for save button and add listener for click
  var saveBtn =  $('.saveBtn');

  saveBtn.on('click', function(){
    var scheduleItem = {
        hour: $(this).parent().attr('id'),
        description: $(this).siblings('.description').val()
    };
    //add item to local storage
    localStorage.setItem(scheduleItem.hour, JSON.stringify(scheduleItem.description));

  });
 
  
  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var timeBlock = $('.time-block');
  var hour9 = $('#hour-9');
  var hour10 = $('#hour-10');
  var hour11 = $('#hour-11');
  var hour12 = $('#hour-12');
  var hour13 = $('#hour-13');
  var hour14 = $('#hour-14')
  var hour15 = $('#hour-15')
  var hour16 = $('#hour-16')
  var hour17 = $('#hour-17')

  hour9.attr('data-hour', 9);
  hour10.attr('data-hour', 10);
  hour11.attr('data-hour', 11);
  hour12.attr('data-hour', 12);
  hour13.attr('data-hour', 13);
  hour14.attr('data-hour', 14);
  hour15.attr('data-hour', 15);
  hour16.attr('data-hour', 16);
  hour17.attr('data-hour', 17);

  console.log(dayjs().hour());
  console.log(timeBlock.attr('data-hour'))
//for loop through all hours with if statement inside
  if (timeBlock.attr('data-hour') < dayjs().hour()){
    
    timeBlock.addClass('past');
  }

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10')); 
  $('#hour-11 .description').val(localStorage.getItem('hour-11')); 
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  //
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D, YYYY'));
});
