const readlineSync = require("readline-sync");

// Function to calculate the sum
function calculateSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

// Function to calculate the average
function calculateAverage(numbers) {
    let sum = calculateSum(numbers);
    return sum / numbers.length;
}

// Function to find the maximum value
function findMaximum(numbers) {
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

// Function to find the minimum value
function findMinimum(numbers) {
    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    return min;
}

// Main function
function main() {
    let n = readlineSync.questionInt("How many numbers? ");

    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
        return;
    }

    let numbers = [];

    for (let i = 0; i < n; i++) {
        numbers.push(
            readlineSync.questionInt(`Enter number ${i + 1}: `)
        );
    }

    console.log("\nResults:");
    console.log(`Sum:     ${calculateSum(numbers)}`);
    console.log(`Average: ${calculateAverage(numbers)}`);
    console.log(`Maximum: ${findMaximum(numbers)}`);
    console.log(`Minimum: ${findMinimum(numbers)}`);
}

// Run the program
main();
