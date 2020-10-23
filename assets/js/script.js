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
  for (var i = 0; i < splitApptTime.length; i++) {
    console.log("splitApptTime loop", splitApptTime[i], typeof splitApptTime);
    console.log("nowInt loop", nowInt, typeof nowInt);
    var apptTimeInt = parseInt(splitApptTime[i]);
    if (apptTimeInt < nowInt) {
      $("#" + apptTimeInt).attr("style", "background-color: gray");
      console.log("apptTimeInt", apptTimeInt, typeof apptTimeInt);
      console.log("nowInt", nowInt, typeof nowInt);
    } else if
      (apptTimeInt === nowInt) {
      $("#" + apptTimeInt).attr("style", "background-color: #FF8484");
      console.log("apptTimeInt", apptTimeInt, typeof apptTimeInt);
      console.log("nowInt", nowInt, typeof nowInt);
    } else if 
       (apptTimeInt > nowInt) {
      $("#" + apptTimeInt).attr("style", "background-color: #70d470");
      console.log("apptTimeInt", apptTimeInt, typeof apptTimeInt);
      console.log("nowInt", nowInt, typeof nowInt);
    }
  }  
}


compareTime();
//if (today === 






