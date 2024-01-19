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
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    // Write your code here

    let result = []

    for (let i = 0; i < queries.length; i++) {
        //initialize a counter, to count the number of occurrences queries elements present inside the 'strings' list
        let counter = 0;
        //now another loop for the strings
        for (let j = 0; j < strings.length; j++) {
            //Check if Element i of Queries List is equal to the element j of stringList. 
            //Remember that one element of Queries List is being compared with all elements of StringList. It means that if queries List has an element which is appearing two times inside string list then it will counter it two times. 
            if (queries[i] === strings[j]) {
                //Make sure to increment the counter variable.
                counter += 1;
            }
        }
        //Finally, Push the Counter variable inside your returned List which you declared earlier and return that list outside of the loop.
        result.push(counter);
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const stringsCount = parseInt(readLine().trim(), 10);

    let strings = [];

    for (let i = 0; i < stringsCount; i++) {
        const stringsItem = readLine();
        strings.push(stringsItem);
    }

    const queriesCount = parseInt(readLine().trim(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = readLine();
        queries.push(queriesItem);
    }

    const res = matchingStrings(strings, queries);

    ws.write(res.join('\n') + '\n');

    ws.end();
}
