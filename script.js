const clock = document.getElementById('clock');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const startStopButton = document.getElementById('start-stop');
const resetButton = document.getElementById('reset');
const quote = document.getElementById('quote-text');
let workTime = 25; // 25 minutes
let breakTime = 5; // 5 minutes
let currentTime = workTime;
let intervalId;
let isPaused = true;

startStopButton.addEventListener('click', startStopTimer);
resetButton.addEventListener('click', resetTimer);





const startSound = document.getElementById('start-sound');
const endSound = document.getElementById('end-sound');
const progressBar = document.getElementById('progress-bar');
const workTimeInput = document.getElementById('work-time');
const breakTimeInput = document.getElementById('break-time');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Function to update the progress bar
function updateProgressBar(totalSeconds) {
    const percentage = (totalSeconds / (currentTime * 60)) * 100;
    progressBar.style.width = percentage + '%';
}

// Event listener for the start/stop button
startStopButton.addEventListener('click', startStopTimer);

// Event listener for the reset button
resetButton.addEventListener('click', resetTimer);

// Event listener for the dark mode toggle switch
darkModeToggle.addEventListener('change', toggleDarkMode);

// Function to start the timer
function startTimer() {
    let totalSeconds = currentTime * 60;
    intervalId = setInterval(() => {
        totalSeconds--;
        updateProgressBar(totalSeconds);
        let m = Math.floor(totalSeconds / 60);
        let s = totalSeconds % 60;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
        minutes.innerHTML = m;
        seconds.innerHTML = s;
        if (totalSeconds === 0) {
            clearInterval(intervalId);
            endSound.play();
            if (currentTime === workTime) {
                currentTime = breakTime;
                sessionName.innerHTML = "Break";
            } else {
                currentTime = workTime;
                sessionName.innerHTML = "Work";
            }
            startTimer();
        }
    }, 1000);
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        minutes.classList.add('dark-mode');
        seconds.classList.add('dark-mode');
    } else {
        minutes.classList.remove('dark-mode');
        seconds.classList.remove('dark-mode');
    }
    // other code that depends on the current dark mode state
}

//EventListener for Work time input
workTimeInput.addEventListener("change", changeWorkTime);

//EventListener for Break time input
breakTimeInput.addEventListener("change", changeBreakTime);

//Function to change Work time
function changeWorkTime() {
    workTime = parseInt(workTimeInput.value);
    if (currentTime === workTime) {
        currentTime = workTime;
    }
}

//Function to change Break time
function changeBreakTime() {
    breakTime = parseInt(breakTimeInput.value);
    if (currentTime === breakTime) {
        currentTime = breakTime;
    }
}

// Function to start the timer
function startStopTimer() {
    if (isPaused) {
        startStopButton.innerText = 'Stop ⏹️';
        isPaused = false;
        startSound.play();
        startTimer();
    } else {
        startStopButton.innerText = 'Start ▶️';
        isPaused = true;
        clearInterval(intervalId);
    }
}

// Function to reset the timer
function resetTimer() {
    clearInterval(intervalId);
    currentTime = workTime;
    isPaused = true;
    startStopButton.innerText = 'Start ▶️';
    let m = Math.floor(currentTime / 60);
    let s = currentTime % 60;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    updateProgressBar(currentTime * 60);
}




// function to display random motivational quote
// Create an array of quotes
const quotes = [
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson 💪",
    "The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it. - Steve Jobs 🔥",
    "Positive thinking will let you do everything better than negative thinking will. - Zig Ziglar 🌟",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt 🌅",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis 🚀",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis 🌟",
    "Be the change you wish to see in the world. - Mahatma Gandhi 🌟",
    "The best way to predict your future is to create it. - Abraham Lincoln 🌅",
    "The only way to do great work is to love what you do. - Steve Jobs 🔥",
    "The only limit to our realization of tomorrow is in today's doubts. - Franklin D. Roosevelt 🌅",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky 🏒",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela 🌟",
    "The way to get started is to quit talking and begin doing. - Walt Disney 🌟",
    "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein 🏆",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill 💪",
    "The best revenge is massive success. - Frank Sinatra 🎵",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison 💡",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson 🕰",
    "The biggest adventure you can ever take is to live the life of your dreams. - Oprah Winfrey 🌟",
    "The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. - Steve Jobs 🔍",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt 🌅",
    "It is not the mountain we conquer, but ourselves. - Sir Edmund Hillary 🏔",
    "The only limit to our realization of tomorrow is in today's doubts. - Franklin D. Roosevelt 🌅",

];
// Get the quote element

// Create a variable to keep track of the current quote index
let currentQuoteIndex = 0;
window.onload = function () {
    displayNewQuote();
};


// Create a function to display a new quote
function displayNewQuote() {
    // Fade out the current quote
    quote.classList.add('fade-out');

    // Wait for the fade out animation to complete
    setTimeout(() => {
        // Update the quote text
        quote.textContent = quotes[currentQuoteIndex];
        quote.classList.remove('fade-out');

        // Update the current quote index
        currentQuoteIndex++;
        if (currentQuoteIndex >= quotes.length) {
            currentQuoteIndex = 0;
        }
    }, 1000);
}

// Call the function every 10 seconds
setInterval(displayNewQuote, 10000);

