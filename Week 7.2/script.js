document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('nameInput');
    const displayElement = document.getElementById('nameDisplay');

    inputElement.addEventListener('input', function(event) {
        const upperCaseValue = event.target.value.toUpperCase();
        event.target.value = upperCaseValue; // Update the input field with uppercase letters
        displayElement.textContent = upperCaseValue; // Display the uppercase name
    });
});