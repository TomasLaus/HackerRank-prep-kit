'use strict';

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here

    //sorting function (instead of using .sort())
    function bubbleSort(arr) {
        //reminder
        let done = false;
        while (!done) {
            done = true;
            //sorting
            for (let i = 1; i < arr.length; i += 1) {
                if (arr[i - 1] > arr[i]) {
                    done = false;
                    //swap positions
                    let tmp = arr[i - 1];
                    arr[i - 1] = arr[i];
                    arr[i] = tmp;
                }
            }
        }

        return arr;
    }

    //using the sorted array
    let array = bubbleSort(arr)
    
    let min = 0
    let max = 0

    //starting from pos 0, we remove the last element (like .pop())
    for (let i = 0; i < array.length - 1; i++) {
        min += array[i]
    }
    
    //we start from the second pos (arr[1]), we're removing the firts element
    for (let j = 1; j < array.length; j++) {
        max += array[j]
    }

    //output
    console.log(min, max)
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
