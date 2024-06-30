document.addEventListener('DOMContentLoaded', function() {
    let numSubjects = parseInt(localStorage.getItem('numbersub'));
    const marksForm = document.getElementById('marksForm');


    for (let i = 1; i <= numSubjects; i++) {
        const label = document.createElement('label');
        label.textContent = `Subject ${i} Mark:`;

        const input = document.createElement('input');
        input.type = 'number';
        input.name = `subject${i}`;
        input.className = 'gradeInput';
        input.required = true;

        const br = document.createElement('br');

        marksForm.appendChild(label);
        marksForm.appendChild(input);
        marksForm.appendChild(br);
    }

    window.submitMarks = function() {
        const grades = [];
        const gradeInputs = document.getElementsByClassName('gradeInput');
        for (let input of gradeInputs) {
            grades.push(input.value);
        }
        localStorage.setItem('grades', JSON.stringify(grades));
        window.location.href = 're.html';
    };
});
