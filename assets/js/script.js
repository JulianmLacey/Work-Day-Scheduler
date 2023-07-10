// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var date = dayjs();

var block = $('#time-blocks')

var buttonListEl = $('#saveBtn');
$('#currentDay').text(date.format('dddd MMM D, YYYY'));

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
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
  });
  block.on('click', '.saveBtn', function(event){
    var hour = event.target.parentElement;

    console.log(hour.id);
    localStorage.setItem(hour.id, hour.children[1].value);
    console.log(localStorage.getItem(hour.id));


  });


  function init(){
    //var currentTime = date.hour();
    var currentTime = 15;

    for(var i = 9; i<19;i++){
    //make card
    var newDiv = $('<div>');
    var hourLabel = "hour-"+i;
    newDiv.attr('id', hourLabel);
    
    if(currentTime>i){
        newDiv.attr('class', 'row time-block past');
    }else if(currentTime==i){
        newDiv.attr('class', 'row time-block present');
    } else{
        newDiv.attr('class', 'row time-block future');
    }

    //add text div
    $('<div>').attr('class', 'col-2 col-md-1 hour text-center py-3').text(((i>12)?((i-12)+"PM"):(i+"AM"))).appendTo(newDiv);

    //add text area
    $('<textarea>').attr('class', 'col-8 col-md-10 description').attr('rows', '3').val(localStorage.getItem(hourLabel)).appendTo(newDiv);
    //console.log(localStorage.getItem(hourLabel));
    //add button
    var button = $('<button>').attr('class', 'btn saveBtn col-2 col-md-1').attr('aria-label', 'save').appendTo(newDiv);
    $('<i>').attr('class', 'fas fa-save').attr('aria-hidden', 'true').appendTo(button);
    
    //class
    block.append(newDiv);
    }

    
  }
  init();
