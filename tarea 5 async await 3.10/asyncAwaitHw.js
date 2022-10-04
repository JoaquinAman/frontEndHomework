import fetch from 'node-fetch';

// async function main() {  
//     var value = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//             .then(response => response.json())
//             .then(json => console.log(json))

//     console.log('inside: ' + value);
//     return value;
// }

// var text = main();  
// console.log('outside: ' + text);

// (async () => {
//     try {
//         const text = await main();
//         // console.log(text);
//     } catch (e) {
//         // console.log('error msg:', e)
//     }
// })();

// --------------------------------

// async function main() {  
//     try{
//     var value = await Promise.resolve('Hey there');
//     console.log('inside: ' + value);
//     return value;
//     }catch (e){
//         console.log(e)
//     }
// }

// var text = main();  
// console.log('outside: ' + text);

// --------------------------------

// async function main() {
//     var value = await Promise.resolve('Hey there');
//     console.log('inside: ' + value);
//     return value;
// }

// (async () => {
//     try{
//         var text = main();  
//         console.log('outside: ' + text);
//     }catch(e){
//         console.log(e)
//     }
// })();

// --------------------------------

// async function main() {
//     var value = await Promise.resolve('Hey there');
//     console.log('inside: ' + value);
//     return value;
// }

async function main() {  
    var value = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))

    console.log('inside: ' + value);
    return value;
}

main()
    .then(text => {
        console.log(text + " asdasd");
    })
    .catch(err => {
        console.log(err)
    });

    
// try{
//     const res = main();
//     console.log("outside: " + res)
// } catch(e){
//     console.log("error: " + e)
// }

