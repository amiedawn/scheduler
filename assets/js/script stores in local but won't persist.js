$(document).ready(function () {
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
        //  $("#" + apptTimeInt).attr("style", "background-color: #b5b2b2");
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

  compareTime();

  var appts = [];

  var $9 = $("#9");
  var $10 = $("#10");
  var $11 = $("#11");
  var $12 = $("#12");
  var $13 = $("#13");
  var $14 = $("#14");
  var $15 = $("#15");
  var $16 = $("#16");

  appts.push($9);

  $("button").on("click", function () {
    localStorage.setItem("9AM", JSON.stringify($9.val()))
    localStorage.setItem("10AM", JSON.stringify($10.val()))
    localStorage.setItem("11AM", JSON.stringify($11.val()))
    localStorage.setItem("12PM", JSON.stringify($12.val()))
    localStorage.setItem("1PM", JSON.stringify($13.val()))
    localStorage.setItem("2PM", JSON.stringify($14.val()))
    localStorage.setItem("3PM", JSON.stringify($15.val()))
    localStorage.setItem("4PM", JSON.stringify($16.val()))
  })

  var stored = JSON.parse(localStorage.getItem("appts"));

  // var 

  // parsed9.push()
  // $("#9").HTML(parsed9.val);

  // $("9").append(localStorage.getItem("9AM"));
  // $("10").append(localStorage.getItem("10AM"));
  // $("11").append(localStorage.getItem("11AM"));
  // $("12").append(localStorage.getItem("12PM"));
  // $("13").append(localStorage.getItem("1PM"));
  // $("14").append(localStorage.getItem("2PM"));
  // $("15").append(localStorage.getItem("3PM"));
  // $("16").append(localStorage.getItem("4PM"));
});



















