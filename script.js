
// Today's date, time during usage, and available times variables //
var today = moment().format('MMMM Do YYYY');
var timeNow = parseInt(moment().format('HH'));
var hours = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17",];

// Add today's date to the Current Day display on html //
$("#currentday").append(today);

// Create loop to find past, current, and future time for styling //

function currentTime() {
    for(var i = 0; i < hours.length; i++){
        if (timeNow === parseInt(hours[i])){
            $(hours[i]).addClass("red");
        }
        else if (timeNow > parseInt(hours[i])){
            $(hours[i]).addClass("green");
        }
        else if(timeNow < parseInt(hours[i])){
            $(hours[i]).addClass("grey");
        }
    }
}

