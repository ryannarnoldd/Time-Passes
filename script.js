
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

setInterval(setClock, 1000)

// Start at 12:00:00
let customDate = new Date()
customDate.setHours(12, 0, 0, 0)

function setClock() {
    // Increment custom time by 1 second
    customDate.setSeconds(customDate.getSeconds() + 1)

    const secondsRatio = customDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + customDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + (customDate.getHours() % 12)) / 12

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()