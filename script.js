let count = 0;

const btn = document.getElementById("clickMeBtn");
const resetBtn = document.getElementById("resetBtn");
const text = document.getElementById("counterText");

// Click counter logic
btn.addEventListener("click", function() {
    count++;
    text.innerHTML = "Button has been clicked " + count + " times.";
});

// Reset logic
resetBtn.addEventListener("click", function() {
    count = 0; // Count ko wapas 0 kar diya
    text.innerHTML = "Button has been clicked 0 times.";
});