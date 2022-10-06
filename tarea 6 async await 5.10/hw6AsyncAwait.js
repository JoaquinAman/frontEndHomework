// Create a function PrintName
// 	It receives a name as a parameter
// 	after 5seconds it prints "The name received is:  X" ?

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}
async function PrintName(myName) {  
    await delay(5);
    console.log(myName);
}
PrintName('joaquin')

// Create a function called job		
// it receives  a parameter called -> data
// if data is not a number , return a promise rejected instantly and give the data "error" in a string
// if data is an odd number, return a promise resolved 1 second later and give the data "odd"  in a string
// if data is an even number, return a promise rejected 2 seconds later and give the data "even" in a string
// THE FUNCTION MUST ALWAYS RETURN A PROMISE

function isNumber(n){
    return new Promise((resolve, reject) => {
        if(typeof n == 'number'){
            if(n % 2 != 0){
                setTimeout(() => {
                    resolve('ODD');
                  }, 1000);
            }
            if(n % 2 == 0){
                setTimeout(() => {
                    reject('EVEN');
                  }, 2000);
            }
        }else{
            reject("error")
        }
    });
}

async function Job(data) {
    try{  
        const result = await isNumber(data);
        console.log(result);
    }catch(e){
        console.log(e)
    }
}

// Job('3')
// Job(3)
// Job(4)