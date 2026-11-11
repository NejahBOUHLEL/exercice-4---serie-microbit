input.onButtonPressed(Button.A, function () {
    pas = 0
    basic.showNumber(pas)
})
input.onGesture(Gesture.Shake, function () {
    pas += 1
    basic.showNumber(pas)
})
let pas = 0
pas = 0
basic.showNumber(pas)
