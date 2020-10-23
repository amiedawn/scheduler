// display current day in header
var today = moment().format("dddd, MMMM Do");
var $headerDate = $("#currentDay");

$headerDate.text(today);

