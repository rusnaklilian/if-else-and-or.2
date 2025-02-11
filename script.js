document.getElementById('rangeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne trimiterea formularului

    // Obținem valorile introduse
    const age = parseInt(document.getElementById('age').value);
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const resultElement = document.getElementById('result');

    // Prima opțiune: Folosind operatorul NOT
    if (!(age >= start && age <= end)) {
        console.log(`Valoarea ${age} aparține intervalului [${start} ${end}]`); // Afișează în consolă
        resultElement.textContent = `Valoarea ${age} aparține intervalului [${start} ${end}]`; // Afișează pe pagină
    } else {
        console.log("Vârsta se află în intervalul specificat.");
        resultElement.textContent = "Vârsta se află în intervalul specificat.";
    }

    // A doua opțiune: Fără a folosi operatorul NOT
    if (age < start || age > end) {
        console.log(`Valoarea ${age} aparține intervalului [${start} ${end}]`); // Afișează în consolă
        resultElement.textContent = `Valoarea ${age} aparține intervalului [${start} ${end}]`; // Afișează pe pagină
    } else {
        console.log("Vârsta se află în intervalul specificat.");
        resultElement.textContent = "Vârsta se află în intervalul specificat.";
    }
});
