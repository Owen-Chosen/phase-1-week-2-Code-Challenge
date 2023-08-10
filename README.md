// This folder contains three code challenges.
//-------------------------------------------------------------------------
// First is a function that prompts the user to input student marks. 
// This input should be between 0 and 100. 
// Then it output the correct grade between A and E as shown below

function gradeStudent (score) {
    if (score < 40) return 'E';
    else if (score >= 40 && score <= 49) return 'D'
    else if (score >= 50 && score <= 59) return 'C'
    else if (score >= 60 && score <= 79) return 'B'
    else if (score > 79) return 'A'
    else return 'Invalid Score'
}

This code can be tested using the statement below

let grade = gradeStudent (39)

//Bonus to print a user friendly statement telling the user grade
if (grade === 'A' || grade === 'E') console.log (`You had an ${grade}`)
else console.log (`You had a ${grade}`)

//-------------------------------------------------------------------------

Second is a function takes the speed of a car. If the speed is less 
than 70, it should print “Ok”. Otherwise, for every 5 km/s 
above the speed limit (70), it should give the driver one 
demerit point and print the total number of demerit points

function speedDetector (speed) {
    let point;
    if (speed <= 70) return 'OK'
    else point = (speed - 70) / 5
    if (point >= 12) return 'License suspended'
    else return `Points: ${point}`

}

to test this function, we have a log statement below

console.log (speedDetector(120))

//-------------------------------------------------------------------------

Finally is Net Salary Calculator which calculates an individual’s Net Salary by getting the inputs of basic salary and benefits. It calculates the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and then returns the net salary. 

As seen below

function netSalaryCalculator (basicSalary, ...rest) {
    let grossSalary = calculateGrossSalary (basicSalary, ...rest);
    let payee = calculatePayee (grossSalary)
    let NHIF = calculateNHIF (grossSalary)
    let NSSF = calculateNSSF (grossSalary)
    return grossSalary - (payee + NHIF + NSSF)
} 



//----------------------------------------------------------------------------------------

// Calculates and returns the gross salary 
function calculateGrossSalary (basicSalary, ...rest) {
    let grossSalary = basicSalary;
    rest.forEach(element => {
        grossSalary+=element
    });
    return grossSalary;
}



//----------------------------------------------------------------------------------------

// Calculates and returns the payee (tax)
function calculatePayee (grossSalary) {
    if (grossSalary < 24000) return 0
    if (grossSalary === 24000) return 0.1 * grossSalary
    else if (24000 < grossSalary && grossSalary <= 32333) return 0.25 * grossSalary
    else if (32333 < grossSalary && grossSalary <= 500000) return 0.3 * grossSalary
    else if (500000 < grossSalary && grossSalary <= 800000) return 0.325 * grossSalary
    else return 0.35 * grossSalary
}



//----------------------------------------------------------------------------------------

//Calculates and returns the NHIF
function calculateNHIF (grossSalary) {
    if (grossSalary < 5999) return 0
    else if (grossSalary === 5999) return 150
    else if (6000 <= grossSalary && grossSalary <= 7999) return 300
    else if (8000 <= grossSalary && grossSalary <= 11999) return 400
    else if (12000 <= grossSalary && grossSalary <= 14999) return 500
    else if (15000 <= grossSalary && grossSalary <= 19999) return 600
    else if (20000 <= grossSalary && grossSalary <= 24999) return 750
    else if (25000 <= grossSalary && grossSalary <= 29999) return 850
    else if (30000 <= grossSalary && grossSalary <= 34999) return 900
    else if (35000 <= grossSalary && grossSalary <= 39999) return 950
    else if (40000 <= grossSalary && grossSalary <= 44999) return 1000
    else if (45000 <= grossSalary && grossSalary <= 49999) return 1100
    else if (50000 <= grossSalary && grossSalary <= 59999) return 1200
    else if (60000 <= grossSalary && grossSalary <= 69999) return 1300
    else if (70000 <= grossSalary && grossSalary <= 79999) return 1400
    else if (80000 <= grossSalary && grossSalary <= 89999) return 1500
    else if (90000 <= grossSalary && grossSalary <= 99999) return 1600
    else return 1700

}



//----------------------------------------------------------------------------------------
//Calculates and returns NSSF
function calculateNSSF (grossSalary) {
    if (grossSalary >= 6000) return 0.06 * grossSalary
    else return 0
}

to test these functions above we have the following:

console.log (netSalaryCalculator(54000, 2000, 500, 750))