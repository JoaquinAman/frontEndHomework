const increment = (() => {
    let counter = 0
    return function(){
        return counter++
    }
})()

console.log(increment())
console.log(increment())
console.log(increment())



// const counter = (function () {
//     let privateCounter = 0;
//     function changeBy(val) {
//       privateCounter += val;
//     }
  
//     return {
//       increment() {
//         changeBy(1);
//       },
  
//       decrement() {
//         changeBy(-1);
//       },
  
//       value() {
//         return privateCounter;
//       },
//     };
//   } ) ();
  
//   console.log(counter.value()); // 0.
  
//   counter.increment();
//   counter.increment();
//   counter.increment();
//   counter.increment();
//   console.log(counter.value()); // 2.
  
//   counter.decrement();
//   console.log(counter.value()); // 1.