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

  // create var to store 

  var persist9 = JSON.parse(localStorage.getItem("9AM"));
  console.log(typeof "persist9")
  $("#9").val(persist9) = persist9;
  var persist10 = JSON.parse(localStorage.getItem("10AM"));
  $("#10").val(persist10) = persist10;
  var persist11 = JSON.parse(localStorage.getItem("11AM"));
  $("#11").val(persist11) = persist11;
  var persist12 = JSON.parse(localStorage.getItem("12PM"));
  $("#12").val(persist12) = persist12;
  var persist13 = JSON.parse(localStorage.getItem("1PM"));
  $("#13").val(persist9) = persist13;
  var persist14 = JSON.parse(localStorage.getItem("2PM"));
  $("#14").val(persist14) = persist14;
  var persist15 = JSON.parse(localStorage.getItem("3PM"));
  $("#15").val(persist15) = persist15;
  var persist16 = JSON.parse(localStorage.getItem("4PM"));
  $("#16").val(persist16) = persist16;


  // var persist10 = JSON.parse(localStorage.getItem($10.val()));
  // $("persist10").text();
  // var persist11 = JSON.parse(localStorage.getItem($11.val()));
  // $("persist11").text();
  // var persist12 = JSON.parse(localStorage.getItem($12.val()));
  // $("persist12").text();
  // var persist13 = JSON.parse(localStorage.getItem($13.val()));
  // $("persist13").text();
  // var persist14 = JSON.parse(localStorage.getItem($14.val()));
  // $("persist14").text();
  // var persist15 = JSON.parse(localStorage.getItem($15.val()));
  // $("persist15").text();
  // var persist16 = JSON.parse(localStorage.getItem($16.val()));
  // $("persist16").text();

  // $("9").append(localStorage.getItem("9AM"));
  // $("10").append(localStorage.getItem("10AM"));
  // $("11").append(localStorage.getItem("11AM"));
  // $("12").append(localStorage.getItem("12PM"));
  // $("13").append(localStorage.getItem("1PM"));
  // $("14").append(localStorage.getItem("2PM"));
  // $("15").append(localStorage.getItem("3PM"));
  // $("16").append(localStorage.getItem("4PM"));
});
















