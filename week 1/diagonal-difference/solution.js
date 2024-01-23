'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let leftDiagSum = 0;
    let rightDiagSum = 0;

    // Iterate through the rows of the matrix
    for (let i = 0; i < arr.length; i++) {
        // Add the element from the left diagonal (row index = column index) to leftDiagSum
        leftDiagSum += arr[i][i];

        // Add the element from the right diagonal (row index + column index = arr.length - 1) to rightDiagSum
        rightDiagSum += arr[i][arr.length - 1 - i];
    }

    // Calculate the absolute difference between the sums of the two diagonals
    return Math.abs(rightDiagSum - leftDiagSum);
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
