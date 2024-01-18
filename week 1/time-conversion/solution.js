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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here

    let militaryTime = 0, militaryHour = 0, timeFormatPm = {}, timeFormatAm = {};
    //If it's PM, we should change the format
    timeFormatPm = {
        '01': 13,
        '02': 14,
        '03': 15,
        '04': 16,
        '05': 17,
        '06': 18,
        '07': 19,
        '08': 20,
        '09': 21,
        '10': 22,
        '11': 23,
        '12': 12
    }
    //If it's 12AM, it is going to be equal to 00
    timeFormatAm = {
        '12': '00'
    }

    //if the last two characters of the string is equal to 'PM', transform the format
    //to military format
    if ('PM' == s.substring(s.length - 2, s.length)) {
        //The substring() method of String values returns the part of this string from the start    index up to and excluding the end index, or to the end of the string if no end index is supplied.
        militaryHour = timeFormatPm[s.substring(0, 2)];
    } //if it's 'AM', just keep the same format
    else if ('AM' == s.substring(s.length - 2, s.length) && 12 == s.substring(0, 2)) {
        militaryHour = timeFormatAm[s.substring(0, 2)];
    } else {
        militaryHour = s.substring(0, 2);
    }
    //Put all together, except the last two characters (AM/PM) 
    militaryTime = (militaryHour + s.substring(2, s.length - 2));


    return militaryTime;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
