// display current day in header
var today = moment().format("dddd, MMMM Do");
var $headerDate = $("#currentDay");

$headerDate.text(today);


//time input from user in military time
var apptTime = "9 - 10 - 11 - 12 - 13 - 14 - 15 - 16";
var splitApptTime = apptTime.split("-");
var now = moment().format("H");
var nowInt = parseInt(now);


// color-code time-blocks based on comparison with time of day
function compareTime() {
  // go through each time block and compare it with the current time
  for (var i = 0; i < splitApptTime.length; i++) {

    // convert apptTime to number so it can be compared
    var apptTimeInt = parseInt(splitApptTime[i]);
    
    // past appts are gray
    if (apptTimeInt < nowInt) {
      $("#" + apptTimeInt).attr("style", "background-color: #b5b2b2");
      } else if
      //current appts are red
      (apptTimeInt === nowInt) {
      $("#" + apptTimeInt).attr("style", "background-color: #FF8484");
    } else if 
      //future appts are green
       (apptTimeInt > nowInt) {
      $("#" + apptTimeInt).attr("style", "background-color: #70d470");
    }
  }  
};



// save buttons and save to local storage
$(".saveBtn").on("click", function() {
  
  var currentTime = $(this).parent().attr("id");
  var apptDescription = $(this).val().trim("id");

  // save and set appt time
  localStorage.setItem("currentTime",$("#apptDescription").text());
  console.log("currentTime", currentTime);
  console.log("apptDescription", apptDescription);
});

// store apppointment information
$("#9am").children("input").val(localStorage.getItem("9am"));
$("#10am").children("input").val(localStorage.getItem("10am"));
$("#11am").children("input").val(localStorage.getItem("11am"));
$("#12pm").children("input").val(localStorage.getItem("12pm"));
$("#1pm").children("input").val(localStorage.getItem("1pm"));
$("#2pm").children("input").val(localStorage.getItem("2pm"));
$("#3pm").children("input").val(localStorage.getItem("3pm"));
$("#4pm").children("input").val(localStorage.getItem("4pm"));
$("#5pm").children("input").val(localStorage.getItem("5pm"));


compareTime();







