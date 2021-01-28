
// Today's date, time during usage, and available times variables //
var today = moment().format('MMMM Do YYYY');
var timeNow = parseInt(moment().format('HH'));
var hours = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17",];

// Add today's date to the Current Day display on html //
$("#currentDay").append(today);

// Create loop to find past, current, and future time for styling //
currentTime();

function currentTime() {

    for(var i = 0; i < hours.length; i++){
        if (timeNow === parseInt(hours[i])){
            $("#" + hours[i]).addClass("green");
        }
        else if (timeNow > parseInt(hours[i])){
            $("#" + hours[i]).addClass("grey");
        }
        else if(timeNow < parseInt(hours[i])){
            $("#" + hours[i]).addClass("red");
        }
    }
}

let eightAM = $("#8");
let nineAM = $("#");
let tenAM = $("#10");
let elevenAM = $("#11");
let twelvePM = $("#12");
let onePM = $("#13");
let twoPM = $("#14");
let threePM = $("#15");
let fourPM = $("#16");
let fivePM = $("#17");


// Create function to save text added into input to local storage //

$(":button").click(function() {
    localStorage.setItem("8 AM", (eightAM.val()))
    localStorage.setItem("9 AM", (nineAM.val()))
    localStorage.setItem("10 AM", (tenAM.val()))
    localStorage.setItem("11 AM", (elevenAM.val()))
    localStorage.setItem("12 PM", (twelvePM.val()))
    localStorage.setItem("1 PM", (onePM.val()))
    localStorage.setItem("2 PM", (twoPM.val()))
    localStorage.setItem("3 PM", (threePM.val()))
    localStorage.setItem("4 PM", (fourPM.val()))
    localStorage.setItem("5 PM", (fivePM.val()));

})

// Now put that stored text onto the page //

    $("#8").append(localStorage.getItem("8 AM"));
    $("#9").append(localStorage.getItem("9 AM"));
    $("#10").append(localStorage.getItem("10 AM"));
    $("#11").append(localStorage.getItem("11 AM"));
    $("#12").append(localStorage.getItem("12 PM"));
    $("#13").append(localStorage.getItem("1 PM"));
    $("#14").append(localStorage.getItem("2 PM"));
    $("#15").append(localStorage.getItem("3 PM"));
    $("#16").append(localStorage.getItem("4 PM"));
    $("#17").append(localStorage.getItem("5 PM"));