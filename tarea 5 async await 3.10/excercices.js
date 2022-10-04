import fetch from 'node-fetch';
    

async function main() {
   var value = await fetch('https://jsonplaceholder.typicode.com/todos')
   const data = await value.json()
   
   return data
}

try {
    const trueProp = await main();
    const myArray = trueProp.filter(elem => elem.completed)
    console.log(myArray)
} catch (error) {
    console.log(error)
}




    // main()
    // .then(text => {
    //     console.log(text);
    // })
    // .catch(err => {
    //     console.log(err)
    // });
