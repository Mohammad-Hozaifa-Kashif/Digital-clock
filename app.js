function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Pad the minutes and seconds with leading zeros, if required
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Choose between "AM" and "PM"
    var timeOfDay = (hours < 12) ? "AM" : "PM";

    // Convert the hours component to 12-hour format if needed
    hours = (hours > 12) ? hours - 12 : hours;

    // Convert an hour of "0" to "12"
    hours = (hours == 0) ? 12 : hours;

    // Form the string for displaying the time
    var timeString = hours + ":" + minutes + ":" + seconds + " " + timeOfDay;

    // Update the display element with the new time
    document.getElementById("clock").innerText = timeString;
}

// Call updateClock() every second
setInterval(updateClock, 1000);

