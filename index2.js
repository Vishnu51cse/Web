const grades = JSON.parse(localStorage.getItem('grades'));
const convertedGrades = grades.map(grade => {
    return convertGrade(grade);
});

const convertedGradesList = document.getElementById('convertedGrades');
convertedGrades.forEach((grade, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `Grade ${index + 1}: ${grade}`;
    convertedGradesList.appendChild(listItem);
});

function convertGrade(grade) {
    
    if (grade >= 90) return 'A';
    else if (grade >= 80) return 'B';
    else if (grade >= 70) return 'C';
    else if (grade >= 60) return 'D';
    else return 'F';
}