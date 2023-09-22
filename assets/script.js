// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  //create object for save button and add listener for click
  var saveBtn =  $('.saveBtn');

  saveBtn.on('click', function(){
    //store button clicked's hour block ID and description's value in variable
    var scheduleItem = {
        hour: $(this).parent().attr('id'),
        description: $(this).siblings('.description').val()
    };
    //add item to local storage
    localStorage.setItem(scheduleItem.hour, JSON.stringify(scheduleItem.description));
  });

  //create variables for each hour ID
  var hour9 = $('#hour-9');
  var hour10 = $('#hour-10');
  var hour11 = $('#hour-11');
  var hour12 = $('#hour-12');
  var hour13 = $('#hour-13');
  var hour14 = $('#hour-14')
  var hour15 = $('#hour-15')
  var hour16 = $('#hour-16')
  var hour17 = $('#hour-17')

  //give data attribute for hour to each hour variable
  hour9.attr('data-hour', 9);
  hour10.attr('data-hour', 10);
  hour11.attr('data-hour', 11);
  hour12.attr('data-hour', 12);
  hour13.attr('data-hour', 13);
  hour14.attr('data-hour', 14);
  hour15.attr('data-hour', 15);
  hour16.attr('data-hour', 16);
  hour17.attr('data-hour', 17);

//put hours into array and loop through array
var timeBlocks = [
  hour9,
  hour10,
  hour11,
  hour12,
  hour13,
  hour14,
  hour15,
  hour16,
  hour17
];

//loop through timeblocks and cheeck if their data-hour attribute is >, <, or === to
//the current hour of the day
for(var i=0; i < timeBlocks.length; i++){

  if (timeBlocks[i].attr('data-hour') == dayjs().hour()){
    timeBlocks[i].addClass('present');

  }else if(timeBlocks[i].attr('data-hour') < dayjs().hour()){
    timeBlocks[i].addClass('past');

  }else if (timeBlocks[i].attr('data-hour') > dayjs().hour()){
    timeBlocks[i].addClass('future');

  };
};
//if there are keys in local storage that match the time block's id, the text area will be set
//to the stored key's value

  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10')); 
  $('#hour-11 .description').val(localStorage.getItem('hour-11')); 
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  
  // current date displayed at the top 
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D, YYYY'));
});
