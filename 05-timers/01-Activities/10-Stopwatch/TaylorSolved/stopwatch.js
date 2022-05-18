//  Interval Exercise (follow the instructions below).

//  This code will run as soon as the page loads.
window.onload = function() {
  $("#lap").on("click", recordLap);
  $("#stop").on("click", stop);
  $("#reset").on("click", reset);
  $("#start").on("click", start);
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 0;
var lap = 1;

function reset() {
  time = 0;
  lap = 1;
  $('#display').text("00:00");
  $('#laps').empty();
}

function start() {
  if (!clockRunning) {
    clockRunning = setInterval(function() {
      count();
    }, 1000);
  }
}

function stop() {
  clearInterval(clockRunning);
  clockRunning = false;
}

function recordLap() {
  var lapDisplay = timeConverter(time);
  $('#laps').prepend("<div>Lap " + lap + " = " + lapDisplay + "</div>")
  lap++;
}
function count() {
  console.log("Howdy!");
  time++;
  var timeDisplay = timeConverter(time);
  $('#display').text(timeDisplay);
}

//  THIS FUNCTION IS DONE FOR US!
//  We do not need to touch it.

function timeConverter(t) {

  //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }

  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}

