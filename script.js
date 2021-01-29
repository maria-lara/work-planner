// Make sure document is ready for javascript to run //

$(document).ready(function() {

        // Today's date during usage //
        var today = moment().format('MMMM Do YYYY');
        // Add today's date to the Current Day display on html //
         $("#currentDay").append(today);
        // Today's time during usage //
        var timeNow = parseInt(moment().format('HH'));
       

        // Create loop to find past, current, and future time for styling //
        var hours = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17",];

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

        // Create function to save text added into input to local storage //
        $("button").on("click", function() {
             
            var eightAM = $("#8");
            var nineAM = $("#9");
            var tenAM = $("#10");
            var elevenAM = $("#11");
            var twelvePM = $("#12");
            var onePM = $("#13");
            var twoPM = $("#14");
            var threePM = $("#15");
            var fourPM = $("#16");
            var fivePM = $("#17");

            var eightAMtext =$("input").val();
            var nineAMtext =$("input").val();
            var tenAMtext =$("input").val();
            var elevenAMtext =$("input").val();
            var twelvePMtext =$("input").val();
            var onePMtext =$("input").val();
            var twoPMtext =$("input").val();
            var threePMtext =$("input").val();
            var fourPMtext =$("input").val();
            var fivePMtext =$("input").val();

            localStorage.setItem(eightAM, eightAMtext);
            localStorage.setItem(nineAM, nineAMtext);
            localStorage.setItem(tenAM, tenAMtext);
            localStorage.setItem(elevenAM, elevenAMtext);
            localStorage.setItem(twelvePM, twelvePMtext);
            localStorage.setItem(onePM, onePMtext);
            localStorage.setItem(twoPM, twoPMtext);
            localStorage.setItem(threePM, threePMtext);
            localStorage.setItem(fourPM, fourPMtext);
            localStorage.setItem(fivePM, fivePMtext);

        })

        // Now put that stored text onto the page //
            $("#8").children("input").val(localStorage.getItem("eightAM", "eightAMtext"));

})