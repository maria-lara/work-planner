// Make sure document is ready for javascript to run //

$(document).ready(function() {

    // Today's date during usage //
    var today = moment().format('MMMM Do YYYY');
    // Add today's date to the Current Day display on html //
     $("#currentDay").append(today);
    // Today's time during usage //
    var timeNow = parseInt(moment().format('HH'));
   

    // Options for times available  //
    var hours = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17",];

    // Match times available to current time to set background color //
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

    // Create function to save location and text of what was inputted //
    $(".btn").on("click", function() {
        var userTime = $(this).parent().attr("id");
        var userInput = $("input").val();
        localStorage.setItem(userTime, userInput);
    });
    // Attach the value (location, text) to the input //
    $("#8am").children("input").val(localStorage.getItem("8am"));
    $("#9am").children("input").val(localStorage.getItem("9am"));
    $("#10am").children("input").val(localStorage.getItem("10am"));
    $("#11am").children("input").val(localStorage.getItem("11am"));
    $("#12pm").children("input").val(localStorage.getItem("12pm"));
    $("#1pm").children("input").val(localStorage.getItem("1pm"));
    $("#2pm").children("input").val(localStorage.getItem("2pm"));
    $("#3pm").children("input").val(localStorage.getItem("3pm"));
    $("#4pm").children("input").val(localStorage.getItem("4pm"));
    $("#5pm").children("input").val(localStorage.getItem("5pm"));

})