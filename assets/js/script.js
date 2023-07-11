var date = dayjs();
var block = $("#time-blocks");
var buttonListEl = $("#saveBtn");

//current day
$("#currentDay").text(date.format("dddd MMM D, YYYY"));

//save text area on save button click
block.on("click", ".saveBtn", function (event) {
  var hour = event.target.parentElement;
  localStorage.setItem(hour.id, hour.children[1].value);
});

//render schedule
function init() {
  var currentTime = date.hour();
  for (var i = 9; i < 19; i++) {
    //make card
    var newDiv = $("<div>");
    var hourLabel = "hour-" + i;
    newDiv.attr("id", hourLabel);

    if (currentTime > i) {
      newDiv.attr("class", "row time-block past");
    } else if (currentTime == i) {
      newDiv.attr("class", "row time-block present");
    } else {
      newDiv.attr("class", "row time-block future");
    }

    //add text div
    $("<div>")
      .attr("class", "col-2 col-md-1 hour text-center py-3")
      .text(i > 12 ? i - 12 + "PM" : i + "AM")
      .appendTo(newDiv);

    //add text area
    $("<textarea>")
      .attr("class", "col-8 col-md-10 description")
      .attr("rows", "3")
      .val(localStorage.getItem(hourLabel))
      .appendTo(newDiv);
    //console.log(localStorage.getItem(hourLabel));
    //add button
    var button = $("<button>")
      .attr("class", "btn saveBtn col-2 col-md-1")
      .attr("aria-label", "save")
      .appendTo(newDiv);
    $("<i>")
      .attr("class", "fas fa-save")
      .attr("aria-hidden", "true")
      .appendTo(button);

    //class
    block.append(newDiv);
  }
}
init();
