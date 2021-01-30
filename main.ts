let Compass = 0
basic.forever(function () {
    Compass = input.compassHeading()
    if (Compass > 340 || Compass < 20) {
        basic.showString("N")
    } else if (Compass > 70 && Compass < 110) {
        basic.showString("E")
    } else if (Compass > 160 && Compass < 200) {
        basic.showString("S")
    } else if (Compass > 230 && Compass < 290) {
        basic.showString("W")
    } else if (Compass > 160 && Compass < 200) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
    basic.clearScreen()
})
