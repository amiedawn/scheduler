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

var storedAppt;
var apptObj = {};
var apptArr = [];

// save buttons and save to local storage
function saveAppt() {
  $(".saveBtn").on("click", function () {
    var currentTime = $(this)
      .parent()
      .attr("id");
    var apptDescription = $(this)
      .find("textarea")
      .val()
      .trim();


  storedAppt = JSON.parse(localStorage.getItem(now));
  apptObj = {}; //already did this when declared, may delete?

  apptObj[id] = apptDescription;
  apptArr.push(apptObj);
  localStorage.setItem(now, JSON.stringify(apptArr));

  for (var i=0; i < storedAppt.length; i++) {
    if (storedAppt[i].hasOwnProperty(id)) {
      storedAppt[i][id] = apptDescription;
      apptArr = storedAppt;
      localStorage.setItem(now, JSON.stringify(apptArr));
      return;
    }
  }
});

}


compareTime();
saveAppt();






