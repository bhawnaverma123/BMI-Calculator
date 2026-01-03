// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Get references to HTML elements
    const calculateBtn = document.getElementById('calculateBtn');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultSection = document.getElementById('resultSection');
    const bmiValueDiv = document.getElementById('bmiValue');
    const bmiCategoryDiv = document.getElementById('bmiCategory');
    const errorMessageDiv = document.getElementById('errorMessage');
    
    // Add event listener to calculate button
    calculateBtn.addEventListener('click', calculateBMI);
    
    // Add event listeners to inputs for Enter key press
    weightInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            calculateBMI();
        }
    });
    
    heightInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            calculateBMI();
        }
    });
    
    /**
     * Main function to calculate BMI
     * This function handles input validation, calculation, and display
     */
    function calculateBMI() {
        // Hide previous results and errors
        hideResults();
        hideError();
        
        // Get input values
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);
        
        // Validate inputs
        if (!validateInputs(weight, height)) {
            return; // Stop execution if validation fails
        }
        
        // Calculate BMI using the formula: BMI = weight / (height * height) * 10000
        // We multiply by 10000 because height is in centimeters, not meters
        const bmi = calculateBMIValue(weight, height);
        
        // Get BMI category
        const category = getBMICategory(bmi);
        
        // Display results
        displayResults(bmi, category);
    }
    
    /**
     * Validates user inputs for weight and height
     * @param {number} weight - Weight in kilograms
     * @param {number} height - Height in centimeters
     * @returns {boolean} - True if inputs are valid, false otherwise
     */
    function validateInputs(weight, height) {
        // Check if inputs are empty or not numbers
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            showError('Please enter valid positive numbers for both weight and height.');
            return false;
        }
        
        // Check reasonable ranges for weight (1-1000 kg)
        if (weight < 1 || weight > 1000) {
            showError('Please enter a realistic weight between 1 and 1000 kg.');
            return false;
        }
        
        // Check reasonable ranges for height (30-300 cm)
        if (height < 30 || height > 300) {
            showError('Please enter a realistic height between 30 and 300 cm.');
            return false;
        }
        
        return true;
    }
    
    /**
     * Calculates BMI value using the standard formula
     * @param {number} weight - Weight in kilograms
     * @param {number} height - Height in centimeters
     * @returns {number} - Calculated BMI value
     */
    function calculateBMIValue(weight, height) {
        // Convert height from centimeters to meters
        const heightInMeters = height / 100;
        
        // Calculate BMI: weight (kg) / height (m)²
        const bmi = weight / (heightInMeters * heightInMeters);
        
        // Round to 1 decimal place
        return Math.round(bmi * 10) / 10;
    }
    
    /**
     * Determines BMI category based on calculated BMI value
     * @param {number} bmi - Calculated BMI value
     * @returns {object} - Object containing category name and CSS class
     */
    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return {
                name: 'Underweight',
                class: 'underweight'
            };
        } else if (bmi >= 18.5 && bmi < 25) {
            return {
                name: 'Normal Weight',
                class: 'normal'
            };
        } else if (bmi >= 25 && bmi < 30) {
            return {
                name: 'Overweight',
                class: 'overweight'
            };
        } else {
            return {
                name: 'Obese',
                class: 'obese'
            };
        }
    }
    
    /**
     * Displays the calculated BMI and category
     * @param {number} bmi - Calculated BMI value
     * @param {object} category - BMI category object with name and class
     */
    function displayResults(bmi, category) {
        // Display BMI value
        bmiValueDiv.textContent = `Your BMI: ${bmi}`;
        
        // Display BMI category with appropriate styling
        bmiCategoryDiv.textContent = category.name;
        bmiCategoryDiv.className = `bmi-category ${category.class}`;
        
        // Show result section
        resultSection.classList.add('show');
    }
    
    /**
     * Shows error message to the user
     * @param {string} message - Error message to display
     */
    function showError(message) {
        errorMessageDiv.textContent = message;
        errorMessageDiv.classList.add('show');
    }
    
    /**
     * Hides the error message
     */
    function hideError() {
        errorMessageDiv.classList.remove('show');
    }
    
    /**
     * Hides the results section
     */
    function hideResults() {
        resultSection.classList.remove('show');
    }
    
    /**
     * Clears all form inputs
     * This function can be used to reset the calculator
     */
    function clearForm() {
        weightInput.value = '';
        heightInput.value = '';
        hideResults();
        hideError();
    }
    
    // Optional: Add a clear/reset functionality
    // You can uncomment the following lines if you want to add a reset button
    /*
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset';
    resetBtn.type = 'button';
    resetBtn.addEventListener('click', clearForm);
    document.querySelector('.container').appendChild(resetBtn);
    */
    
});