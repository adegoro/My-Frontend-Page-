function updateClock() {
    const currentTime = new Date();

    // Update UTC time in milliseconds
    const timeElement = document.getElementById('time');
    timeElement.textContent = currentTime.getTime();

    // Update day of the week
    const dayElement = document.getElementById('day');
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    dayElement.textContent = daysOfWeek[currentTime.getUTCDay()];
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();
