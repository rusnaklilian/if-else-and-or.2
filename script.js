document.getElementById('rangeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const resultElement = document.getElementById('result');


    const message = (age < start || age > end) ? "Valoarea nu apartine intervalului " : "Valoarea  apartine intervalului specificat.";


    console.log(message);
    resultElement.textContent = message;

}); 
