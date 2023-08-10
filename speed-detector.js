// This function takes the speed of a car. If the speed is less 
// than 70, it should print “Ok”. Otherwise, for every 5 km/s 
// above the speed limit (70), it should give the driver one 
// demerit point and print the total number of demerit points

function speedDetector (speed) {
    let point;
    if (speed <= 70) return 'OK'
    else point = (speed - 70) / 5
    if (point >= 12) return 'License suspended'
    else return `Points: ${point}`

}

//Bonus to print the report from the speedDetector
console.log (speedDetector(120))