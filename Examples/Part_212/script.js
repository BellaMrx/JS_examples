function clock() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
    // This block of code retrieves the current time, formats it as HH:MM:SS, and updates the content of the 'time' div with the formatted time.
    setTimeout(clock, 1000);
    // This line sets a timer to call the startTime function again after 1000 milliseconds (1 second), allowing the clock to continuously update every second.
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    // This function adds a leading zero to single-digit numbers to ensure that the time is always displayed in two digits format.
    return i;
  }