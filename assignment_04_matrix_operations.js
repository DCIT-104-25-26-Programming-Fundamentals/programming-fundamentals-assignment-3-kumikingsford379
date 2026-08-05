// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

// Function to read a matrix from the user
function readMatrix(rows, cols) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let row = readlineSync.question(`Enter row ${i + 1}: `)
            .split(' ')
            .map(Number);

        if (row.length !== cols) {
            console.log(`Error: Row must contain exactly ${cols} values.`);
            return null;
        }

        matrix.push(row);
    }

    return matrix;
}

// Function to display a matrix
function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join('\t'));
    }
}

// PART A: Transpose a matrix
function transposeMatrix(matrix) {
    let result = [];

    for (let j = 0; j < matrix[0].length; j++) {
        result[j] = [];

        for (let i = 0; i < matrix.length; i++) {
            result[j][i] = matrix[i][j];
        }
    }

    return result;
}

// PART B: Add two matrices
function addMatrices(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];

        for (let j = 0; j < matrixA[0].length; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }

    return result;
}

// PART C: Multiply two matrices
function multiplyMatrices(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];

        for (let j = 0; j < matrixB[0].length; j++) {
            let sum = 0;

            for (let k = 0; k < matrixA[0].length; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }

            result[i][j] = sum;
        }
    }

    return result;
}

// Main function
function main() {

    // PART A: Transpose
    console.log("\n=== PART A: TRANSPOSE MATRIX ===");

    let rows = readlineSync.questionInt("Enter number of rows: ");
    let cols = readlineSync.questionInt("Enter number of columns: ");

    let matrix = readMatrix(rows, cols);

    if (matrix === null) return;

    console.log("\nOriginal Matrix:");
    displayMatrix(matrix);

    let transposed = transposeMatrix(matrix);

    console.log("\nTransposed Matrix:");
    displayMatrix(transposed);


    // PART B: Matrix Addition
    console.log("\n=== PART B: ADD MATRICES ===");

    rows = readlineSync.questionInt("Enter number of rows: ");
    cols = readlineSync.questionInt("Enter number of columns: ");

    console.log("Enter Matrix A:");
    let matrixA = readMatrix(rows, cols);

    console.log("Enter Matrix B:");
    let matrixB = readMatrix(rows, cols);

    if (matrixA === null || matrixB === null) return;

    let sumMatrix = addMatrices(matrixA, matrixB);

    console.log("\nResult of Addition:");
    displayMatrix(sumMatrix);


    // PART C: Matrix Multiplication
    console.log("\n=== PART C: MULTIPLY MATRICES ===");

    let m = readlineSync.questionInt("Enter rows of Matrix A: ");
    let n = readlineSync.questionInt("Enter columns of Matrix A: ");

    console.log("Enter Matrix A:");
    matrixA = readMatrix(m, n);

    let n2 = readlineSync.questionInt("Enter rows of Matrix B: ");
    let p = readlineSync.questionInt("Enter columns of Matrix B: ");

    if (n !== n2) {
        console.log("Error: Number of columns in Matrix A must equal number of rows in Matrix B.");
        return;
    }

    console.log("Enter Matrix B:");
    matrixB = readMatrix(n2, p);

    let productMatrix = multiplyMatrices(matrixA, matrixB);

    console.log("\nResult of Multiplication:");
    displayMatrix(productMatrix);
}

// Run program
main();

