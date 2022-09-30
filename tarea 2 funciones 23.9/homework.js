// #1 
// Write a function to join all elements of an array into a string

const arr = ["h","o","l","a"," ","m","u","n","d","o"]
 
const Joiner = (arr) => {
    return arr.join("");
}
console.log("-------")
console.log(Joiner(arr))

// #2
// Write a function that accepts an array as input and  returns a string 
// * string must have dashes (-) between each element

const SecondJoiner = (arr) => {
    let myArray = arr.map(elem => elem + "-").join("")
    return myArray.slice(0, -1)
}
console.log("-------")
console.log(SecondJoiner(arr)) 

// #3
// Write a function that accepts an array as input and  returns a string 
// * string must have dashes (-) between each two even numbers
// * eg : 01234568  -->  0123456-8
// * eg: 0246 --> 0-2-4-6

const isEven = (first, second) => {
    if((first % 2 == 0) && (second % 2 == 0)){
        return true;
    }
    return false;
}

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr2 = [0, 2, 4, 6]
const arr3 = [0, 1, 2, 3, 4, 5, 6, 8]

const ThirdJoiner = (arr) => {
    let index = 0

    return arr.map
    (elem => {
        if(isEven(elem, arr[arr.indexOf(elem)+1]))
        {
            return elem.toString() + "-"
        } 
        return elem}
    )
    .join("")
}

console.log("-------")
console.log(ThirdJoiner(arr1)) 
console.log(ThirdJoiner(arr2)) 
console.log(ThirdJoiner(arr3)) 