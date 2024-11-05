datalogger.onLogFull(function () {
    basic.showString("Log full")
})
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onGesture(Gesture.TiltLeft, function () {
    meters += 1
    basic.showNumber(meters)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    memory = 3.6 * (meters / ((stop - start) / 1000))
    datalogger.log(
    datalogger.createCV("Meters", meters),
    datalogger.createCV("Start", start),
    datalogger.createCV("Stop", stop),
    datalogger.createCV("KM/h", memory)
    )
    basic.showNumber(memory)
    basic.showString("KM/H")
})
input.onButtonPressed(Button.B, function () {
    stop = input.runningTime()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(memory)
    basic.pause(5000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    meters += -1
    basic.showNumber(meters)
    basic.clearScreen()
    if (meters == -1) {
        meters = 0
    }
})
input.onGesture(Gesture.LogoDown, function () {
    datalogger.deleteLog()
    basic.showIcon(IconNames.Skull)
    basic.pause(500)
    basic.clearScreen()
})
let stop = 0
let start = 0
let meters = 0
let memory = 0
memory = 0
meters = 0
start = 0
stop = 0
