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
    localStorage.setItem('schedule-item', JSON.stringify(scheduleItem));
  });
 
  
  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D, YYYY'));
});
