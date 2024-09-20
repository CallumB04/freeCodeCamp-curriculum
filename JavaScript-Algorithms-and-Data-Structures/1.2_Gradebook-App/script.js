// Returns average of array of scores
function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
}
  
// Returns grade corresponding to given score
function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
}
  
// Returns if student's grade is not equal to 'F'
function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

// Returns message to output to console
function studentMsg(totalScores, studentScore) {
    let messageEnd;
  
    if (hasPassingGrade(studentScore)) {
      messageEnd = ". You passed the course."
    } else {
      messageEnd = ". You failed the course."
    }
  
    return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + messageEnd;
}

// TEST CASES
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([92, 82, 12, 77, 57, 32, 67, 38, 97, 18], 81));
  