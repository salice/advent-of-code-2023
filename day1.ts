// need to read in file, parse data, find first and last integer, concat, return sum all numbers
import * as fs from 'fs';
const rawData = fs.readFileSync('inputs/day1.txt','utf8');
const splitData = rawData.split(/[\r\n]+/)
function returnIntegers(str: string)  {
    const num = str.replace(/\D/g,'');
    const numArray = num.split("")
    const firstLastNum = numArray[0] + numArray[numArray.length - 1];
    return Number(firstLastNum)
}
const intArray = splitData.map(returnIntegers)
const part1ASolution = intArray.reduce((a, b) => a + b, 0)
console.log(part1ASolution)
// Part 2
const startNumber = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
}


function returnIntegersTwo(str: string)  {
    const num = str.replace(/\D/g,'');
    const numArray = num.split("")
    // if (numArray.length < 2) {
    //     // check for string numbers
    //     Object.keys(startNumber).map()
    //     str.search(startNumber.)
    // }
    const firstLastNum = numArray[0] + numArray[numArray.length - 1];
    return Number(firstLastNum)
}