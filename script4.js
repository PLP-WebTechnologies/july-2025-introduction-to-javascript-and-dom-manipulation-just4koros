// --- Part 1: Variable Declarations and Conditionals ---

// Variable declarations
let studentName = "John Doe";
let grade = 85;
const passingScore = 70;

// Conditional statement
if (grade >= passingScore) {
    console.log(`${studentName} passed the assignment with a grade of ${grade}.`);
} else {
    console.log(`${studentName} needs to retake the assignment.`);
}


// --- Part 2: At least 2 custom functions ---

// Function 1: A simple function that calculates the area of a rectangle
function calculateRectangleArea(width, height) {
    // Check if inputs are valid numbers
    if (typeof width !== 'number' || typeof height !== 'number') {
        return "Invalid input: Please provide numbers for width and height.";
    }
    return width * height;
}

// Function 2: A function that generates a greeting
function createGreeting(name) {
    return `Hello, ${name}! Welcome to the JavaScript world.`;
}

// Call the functions and log their results
let area = calculateRectangleArea(10, 5);
console.log(`The area of the rectangle is: ${area}`);

let greetingMessage = createGreeting("Alice");
console.log(greetingMessage);


// --- Part 3: At least 2 loop examples ---

// Loop 1: A for loop to iterate through an array
console.log("\n--- For Loop Example ---");
const fruits = ["Apple", "Banana", "Cherry", "Date"];
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit at index ${i}: ${fruits[i]}`);
}

// Loop 2: A while loop to count down
console.log("\n--- While Loop Example ---");
let countdown = 3;
while (countdown > 0) {
    console.log(`T-minus ${countdown}...`);
    countdown--;
}
console.log("Lift off!");


// --- Part 4: At least 3 DOM interactions ---

// DOM Interaction 1: Get an element and change its text content
// This is executed when the script is loaded
document.getElementById("displayText").textContent = "This text was changed by JavaScript on load!";

// DOM Interaction 2 & 3: Add an event listener to a button to change content and style
document.getElementById("myButton").addEventListener("click", function() {
    let outputElement = document.getElementById("displayText");
    
    // DOM Interaction 2: Change text content on button click
    outputElement.textContent = "Button clicked! The text has been updated.";
    
    // DOM Interaction 3: Change an element's style
    outputElement.style.color = "darkgreen";
    outputElement.style.fontWeight = "bold";
});