

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
let nineAM = $("#9");
let tenAM = $("#10");
let elevenAM = $("#11");
let twelvePM = $("#12");
let onePM = $("#13");
let twoPM = $("#14");
let threePM = $("#15");
let fourPM = $("#16");
let fivePM = $("#17");


// Create function to save text added into input to local storage //

$("button").on("click",function() {
    localStorage.setItem("8AMtext", (eightAM.val()))
    localStorage.setItem("9AMtext", (nineAM.val()))
    localStorage.setItem("10AMtext", (tenAM.val()))
    localStorage.setItem("11AMtex", (elevenAM.val()))
    localStorage.setItem("12PMtext", (twelvePM.val()))
    localStorage.setItem("1PMtext", (onePM.val()))
    localStorage.setItem("2PMtext", (twoPM.val()))
    localStorage.setItem("3PMtext", (threePM.val()))
    localStorage.setItem("4PMtext", (fourPM.val()))
    localStorage.setItem("5PMtext", (fivePM.val()));

})

// Now put that stored text onto the page //

    $("#8").append(localStorage.getItem("8AMtext"));
    $("#9").append(localStorage.getItem("9AMtext"));
    $("#10").append(localStorage.getItem("10AMtext"));
    $("#11").append(localStorage.getItem("11AMtext"));
    $("#12").append(localStorage.getItem("12PMtext"));
    $("#13").append(localStorage.getItem("1PMtext"));
    $("#14").append(localStorage.getItem("2PMtext"));
    $("#15").append(localStorage.getItem("3PMtext"));
    $("#16").append(localStorage.getItem("4PMtext"));
    $("#17").append(localStorage.getItem("5PMtext"));

