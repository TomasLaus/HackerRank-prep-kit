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
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    // Convert the input string to lowercase and split it into an array of characters
    s = s.toLowerCase().split("");

    // Define the alphabet as a string
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    // Iterate through each letter of the alphabet
    for (let i = 0; i < alphabet.length; i++) {
        // Check if the current letter is not present in the input string
        if (!s.includes(alphabet[i])) {
            // If any letter is missing, return 'not pangram'
            return 'not pangram';
        }
    }

    // If all letters are present, return 'pangram'
    return 'pangram';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = pangrams(s);

    ws.write(result + '\n');

    ws.end();
}
