function submitNumber() {
    const number = document.getElementById('numberSubjects').value;
    localStorage.setItem('numbersub', number); 
    window.location.href = 'results.html';
}