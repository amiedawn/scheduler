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
  appts.push($10);
  appts.push($11);
  appts.push($12);

  $("button").on("click", function () {
    localStorage.setItem("9AM", JSON.stringify($9.val()));
    localStorage.setItem("10AM", JSON.stringify($10.val()));
    localStorage.setItem("11AM", JSON.stringify($11.val()));
    localStorage.setItem("12PM", JSON.stringify($12.val()));
    localStorage.setItem("1PM", JSON.stringify($13.val()));
    localStorage.setItem("2PM", JSON.stringify($14.val()));
    localStorage.setItem("3PM", JSON.stringify($15.val()));
    localStorage.setItem("4PM", JSON.stringify($16.val()));
  });

  // create var to store each appt and 
  var persist9 = JSON.parse(localStorage.getItem("9AM"));
    $("#9").val(persist9);
  var persist10 = JSON.parse(localStorage.getItem("10AM"));
    $("#10").val(persist10);
  var persist11 = JSON.parse(localStorage.getItem("11AM"));
    $("#11").val(persist11);
  var persist12 = JSON.parse(localStorage.getItem("12PM"));
    $("#12").val(persist12);
  var persist13 = JSON.parse(localStorage.getItem("1PM"));
    $("#13").val(persist13);
  var persist14 = JSON.parse(localStorage.getItem("2PM"));
    $("#14").val(persist14);
  var persist15 = JSON.parse(localStorage.getItem("3PM"));
    $("#15").val(persist15);
  var persist16 = JSON.parse(localStorage.getItem("4PM"));
    $("#16").val(persist16);

});
  