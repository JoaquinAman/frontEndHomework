var vowels = ['a', 'e', 'i', 'o', 'u'];
function printVowels() {
    vowels.map(function (vowel, idx) {
        console.log("".concat(vowel, " is at index ").concat(idx));
    });
}
printVowels();
