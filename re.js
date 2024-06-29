document.addEventListener('DOMContentLoaded', function() {
    const grades = JSON.parse(localStorage.getItem('grades'));
    const convertedGradesList = document.getElementById('convertedGrades');

    if (grades && grades.length > 0) {
        grades.forEach((grade, index) => {
            const convertedGrade = convertGrade(parseInt(grade));
            const listItem = document.createElement('li');
            listItem.textContent = `Subject ${index + 1}: ${convertedGrade}`;
            convertedGradesList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'No grades found.';
        convertedGradesList.appendChild(listItem);
    }
});

function convertGrade(grade) {
    if (grade >= 90) return 'A';
    else if (grade >= 80) return 'B';
    else if (grade >= 70) return 'C';
    else if (grade >= 60) return 'D';
    else return 'F';
}

