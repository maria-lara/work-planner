
// Today's date, time during usage, and available times variables //
var today = moment().format('MMMM Do YYYY');
var timeNow = parseInt(moment().format('HH'));
var hours = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17",];

// Add today's date to the Current Day display on html //
$("#currentday").append(today);

// Create loop to find past, current, and future time for styling //







