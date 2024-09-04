let totalTime = 0
let incrementInterval = 1
let seconds = 0
let minutes = 0
let hours = 0

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const secondsSpan = document.querySelector('.seconds')

setInterval(function increment() {
    totalTime += incrementInterval;
    secondsSpan.innerHTML = totalTime
    renderClock()
}, 1000);

function renderClock () {
    seconds = totalTime % 60
    minutes = Math.floor(totalTime / 60) % 60
    hours = Math.floor(totalTime / 3600) % 12

    secondHand.style.setProperty('--rotation', seconds * 6)
    minuteHand.style.setProperty('--rotation', minutes * 6)
    hourHand.style.setProperty('--rotation', hours * 30)
};

function doubleInterval() {
    incrementInterval *= 2
};