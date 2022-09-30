const compareStr = (str1, str2) => {
    switch (str1){
        case '(':
            if (str2 == '}' || str2 == ']')
                return false;
            break;
        case '{':
            if (str2 == ')' || str2 == ']')
                return false;
            break;
        case '[':
            if (str2 == '}' || str2 == ')')
                return false;
            break;
    }
    return true
}

const pairCounter = (myArray) => {
    let counter = 0
    let flag = true
    myArray.map(elem => {
        if(elem == '(' || elem == '{' || elem == '['){
            counter++
        }else if (elem == ')' || elem == '}' || elem == ']') {
            counter--
            if(counter < 0){
                flag = false
            }
        }
    })
    if(counter != 0){
        return false
    }
    return flag
}

const isBalanced = (myString) => {
    let myArr = myString.split('')
    let result = true
    let arePaired = pairCounter(myArr)
    myArr.map(elem => {
        if( !(compareStr(elem, myArr[myArr.indexOf(elem)+1])) )
        {
            result = false
        }
    })
    if((arePaired === true) && (result === true)){
        return true
    }
    return false
}

console.log("true:")

let str1 = "([{}])";
let str2 = "()()(()){}{[[]]}";
let str3 = "";
let str4 = "{}";
let str5 = "{{{{{(((((())))))}}}}}";

console.log("string1: " +  str1 +  " " + isBalanced(str1))
console.log("string2: " +  str2 +  " " + isBalanced(str2))
console.log("string3: " +  str3 +  " " + isBalanced(str3))
console.log("string4: " +  str4 +  " " + isBalanced(str4))
console.log("string5: " +  str5 +  " " + isBalanced(str5))

console.log("----")

console.log("false:")

let str6 = "(){}[";
let str7 = ")(";
let str8 = "{]";
let str9 = "([]";
let str10 = "[{]";

console.log("string6: " + str6 + " " + isBalanced(str6))
console.log("string7: " +  str7 +  " " + isBalanced(str7))
console.log("string8: " +  str8 +  " " + isBalanced(str8))
console.log("string9: " +  str9 +  " " + isBalanced(str9))
console.log("string10: " +  str10 +  " " + isBalanced(str10))