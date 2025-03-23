// Function to generate a random job probability
function analyzeResume() {
    // Simulate analyzing the resume and getting a random probability percentage between 40% and 95%
    const randomProbability = Math.floor(Math.random() * (95 - 40 + 1)) + 40;

    // Update the probability text
    const probabilityText = document.getElementById("probability-text");
    probabilityText.textContent = `Your Job Probability: ${randomProbability}%`;

    // Optional: Add color change based on probability (color scale: low -> high)
    if (randomProbability < 60) {
        probabilityText.style.color = "red"; // low probability
    } else if (randomProbability < 80) {
        probabilityText.style.color = "orange"; // medium probability
    } else {
        probabilityText.style.color = "green"; // high probability
    }
}

// Event listener for file input
document.getElementById("resume-upload").addEventListener("change", function() {
    // Trigger the analysis when a file is selected
    const fileInput = document.getElementById("resume-upload");
    if (fileInput.files.length > 0) {
        analyzeResume();  // Call the analyzeResume function once the file is selected
    }
});
