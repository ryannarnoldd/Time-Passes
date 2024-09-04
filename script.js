let totalTime = 3563
let incrementInterval = 1
let seconds = 0
let minutes = 0
let hours = 0
let autoIncrement = false;

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const secondsSpan = document.querySelector('.seconds')
const autoSpan = document.querySelector('.auto')
const increaseSpan = document.querySelector('.increase')


function increment() {
    totalTime += incrementInterval;
    secondsSpan.innerHTML = totalTime
    renderClock()
};

function renderClock () {
    seconds = totalTime % 60
    minutes = Math.floor(totalTime / 60) % 60
    hours = Math.floor(totalTime / 3600) % 12

    secondHand.style.setProperty('--rotation', seconds * 6)
    minuteHand.style.setProperty('--rotation', minutes * 6)
    hourHand.style.setProperty('--rotation', hours * 30)
};

function increaseInterval() {
    incrementInterval++;
    // set the interval span to the new interval
    increaseSpan.innerHTML = `+${incrementInterval}`;
};

function autoIncrementToggle() {
    autoIncrement = !autoIncrement;
    // set uato span to say off or true.
    autoSpan.innerHTML = autoIncrement ? 'ON' : 'OFF'
}

setInterval(() => {
    if (autoIncrement) {
        increment()
    }
}, 1000);
