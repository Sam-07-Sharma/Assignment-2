
document.getElementById('toggle-ingredients').addEventListener('click', function() {
    const ingredientsList = document.querySelector('.ingredients');
    ingredientsList.style.display = ingredientsList.style.display === 'block' ? 'none' : 'block';
});

let currentStep = 0;
const steps = document.querySelectorAll('.step');
const progressFill = document.getElementById('progress-fill');

document.getElementById('start-cooking').addEventListener('click', function() {
    if (currentStep < steps.length) {
        steps[currentStep].classList.add('active');
        currentStep++;
        updateProgressBar();
    } else {
        alert("You've completed all steps!");
        resetCooking(); // Call the reset function
    }
});

function updateProgressBar() {
    const progressPercentage = (currentStep / steps.length) * 100;
    progressFill.style.width = progressPercentage + '%'; // Update the width of the progress bar
}

function resetCooking() {
    // Hide all steps
    steps.forEach(step => step.classList.remove('active'));
    currentStep = 0; // Reset the step counter
}
