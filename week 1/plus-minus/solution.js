'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here


    
    let pos = 0
    let neg = 0
    let zero = 0
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0)  {
            pos++
        } else if (arr[i] < 0) {
            neg++
        } else {
            zero++
        }
    }
    
    const calculateProportions = (pos, neg, zero) => {
        // const positive = pos/arr.length.toFixed(6)
        
        // More 'vanilla' JS
        const positive = Math.round((pos/arr.length) * 1000000) / 1000000
        console.log(positive)
        //
        const negative = Math.round((neg/arr.length) * 1000000) / 1000000
        console.log(negative)
        //
        const z = Math.round((zero/arr.length) * 1000000) / 1000000
        console.log(z)
    }
    calculateProportions(pos, neg, zero)
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
