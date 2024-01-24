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
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    // Write your code here

    // Keeping in mind that the maximum value in the input array is 100
    const maxVal = 100;

    // Initialize an array to store the count of each element
    const countArray = new Array(maxVal).fill(0);

    // Count the occurrences of each element in the input array
    for (let i = 0; i < arr.length; i++) {
        //This increments the count at the index corresponding to the value of arr[i] in the 'countArray'. It's effectively counting the occurrences of each unique element in the input array.
        countArray[arr[i]]++;
    }

    return countArray;



}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = countingSort(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
