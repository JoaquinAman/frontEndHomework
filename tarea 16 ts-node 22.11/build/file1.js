"use strict";
const vowels = ['a', 'e', 'i', 'o', 'u'];
function printVowels() {
    vowels.map((vowel, idx) => {
        console.log(`${vowel} is at index ${idx}`);
    });
}
printVowels();
