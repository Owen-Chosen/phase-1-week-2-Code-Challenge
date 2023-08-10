// This function prompts the user to input student marks. 
// This input should be between 0 and 100. 
// Then it output the correct grade between A and E

function gradeStudent (score) {
    if (score < 40) return 'E';
    else if (score >= 40 && score <= 49) return 'D'
    else if (score >= 50 && score <= 59) return 'C'
    else if (score >= 60 && score <= 79) return 'B'
    else if (score > 79) return 'A'
    else return 'Invalid Score'
}

let grade = gradeStudent (39)

//Bonus to print a user friendly statement telling the user grade
if (grade === 'A' || grade === 'E') console.log (`You had an ${grade}`)
else console.log (`You had a ${grade}`)
