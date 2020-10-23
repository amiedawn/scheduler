// display current day in header
var today = moment().format("dddd, MMMM Do");
var $headerDate = $("#currentDay");

$headerDate.text(today);


//time input from user in military time
var apptTime = ["9", "10", "11", "12", "13", "14", "15", "16"];
var now = moment().format("H");


// color-code time-blocks based on comparison with time of day
function compareTime() {
  for (var i = 0; i < apptTime.length; i++) {
    console.log("apptTime loop", apptTime[i], typeof apptTime[i]);
    console.log("now loop", now, typeof now);
    if (parseInt(apptTime[i]) < now) {
      $("#" + apptTime[i]).attr("style", "background-color: gray");
      console.log("apptTime", apptTime[i], typeof apptTime[i]);
      console.log("now", now, typeof now);
    } else if 
       ("#" + parseInt(apptTime[i]) > now) {
      $(apptTime[i]).attr("style", "background-color: green");
      console.log("apptTime", apptTime[i], typeof apptTime[i]);
      console.log("now", now, typeof now);
    } else {
      $("#" + apptTime[i]).attr("style", "background-color: #FF8484");
    }
  }  
}


compareTime();
//if (today === 






