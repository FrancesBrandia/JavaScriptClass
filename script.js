// Initialize variable to count saved palettes
let paletteCount = 0;

// Function to generate a color palette based on user input
function generatePalette() {
    // Get the container where colors will be displayed
    const paletteContainer = document.getElementById('color-palette');
    paletteContainer.innerHTML = '';

    // Determine number of colors based on user selection
    const numColors = parseInt(document.getElementById('num-colors').value, 10);

    // Generate color boxes and add them to the container
    for (let i = 0; i < numColors; i++) {
        const colorHex = generateRandomColor();  
        createColorBox(colorHex, paletteContainer);
    }

    // Display additional color section
    const addColorSection = document.getElementById('add-color-section');
    addColorSection.style.display = 'block';

    // Save the current palette to the library
    savePalette();
}

// Function to generate a random color hex code
function generateRandomColor() {
    // Generate a random color in hexadecimal format
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

// Function to create a color box with the specified color
function createColorBox(colorHex, container) {
    // Create a colored box element
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = colorHex;

    // Display the color hex code as a label
    const colorHexLabel = document.createElement('label');
    colorHexLabel.textContent = colorHex; 
    colorBox.appendChild(colorHexLabel);

    // Add the color box to the palette container
    container.appendChild(colorBox);
}

// Function to save the current palette to the library
function savePalette() {
    // Get the library container where palettes are stored
    const paletteLibrary = document.getElementById('palette-library');
    const paletteContainer = document.getElementById('color-palette').cloneNode(true);

    // Increment palette count for the title
    paletteCount++;

    // Create a title for the current palette
    const paletteTitle = document.createElement('h3');
    paletteTitle.textContent = 'Palette ' + paletteCount;

    // Create a wrapper for the saved palette and add title and colors
    const paletteWrapper = document.createElement('div');
    paletteWrapper.classList.add('saved-palette');
    paletteWrapper.appendChild(paletteTitle);
    paletteWrapper.appendChild(paletteContainer);

    // Add the entire palette wrapper to the library
    paletteLibrary.appendChild(paletteWrapper);
}

// Generate initial color palette when the page loads
document.addEventListener('DOMContentLoaded', function() {
    generatePalette();
});

// Listen for clicks on the generate button to generate a new palette
document.getElementById('generate-btn').addEventListener('click', generatePalette);

// Listen for changes in the number of colors input to regenerate the palette
document.getElementById('num-colors').addEventListener('change', generatePalette);

// Listen for clicks on the add color button to add a new color to the palette
document.getElementById('add-color-btn').addEventListener('click', function() {
    const colorPicker = document.getElementById('color-picker');
    const selectedColor = colorPicker.value;

    // Validate selected color before adding it to the palette
    if (selectedColor === '#000000') {
        alert('Black (#000000) is not allowed. Please pick another color.');
    } else {
        const paletteContainer = document.getElementById('color-palette');
        createColorBox(selectedColor, paletteContainer);
    }
});
