// script.js

// Function to generate a random hex color
const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Initialize intervalID to null
let intervalID = null;

// Function to start changing the background color
const startChangingColor = () => {
    // *** ADDITION: Check if intervalID is null to prevent multiple intervals ***
    if (intervalID === null) {
        intervalID = setInterval(changeBg, 1000);
    }

    // Inner function to change the background color
    function changeBg() {
        document.body.style.backgroundColor = randomColor();
    }
}

// Function to stop changing the background color
const stopChangingColor = () => {
    // *** ADDITION: Check if intervalID is not null before clearing interval ***
    if (intervalID !== null) {
        clearInterval(intervalID);
        // *** ADDITION: Set intervalID to null to indicate no active interval ***
        intervalID = null;
    }
}

// Event listeners for the Start and Stop buttons
document.getElementById("start").addEventListener("click", startChangingColor);
document.getElementById("stop").addEventListener("click", stopChangingColor);
