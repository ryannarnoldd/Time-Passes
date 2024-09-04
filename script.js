let totalTime = 0 // In seconds for now.
let seconds = 0
let minutes = 0
let hours = 0

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
// get seconds span to update the seconds.
const secondsSpan = document.querySelector('.seconds')

function rotateHand(hand, degree) {
    hand.style.setProperty('--rotation', degree)
}

function addSeconds() {
    totalTime++
    secondsSpan.innerHTML = totalTime
    renderClock()

}

function renderClock () {
    seconds = totalTime % 60
    minutes = Math.floor(totalTime / 60) % 60
    hours = Math.floor(totalTime / 3600) % 12

    rotateHand(secondHand, seconds * 6)
    rotateHand(minuteHand, minutes * 6)
    rotateHand(hourHand, hours * 30)
};




renderClock()

