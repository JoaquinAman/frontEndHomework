
const classPoints1 = [2,3]
const yourPoints1 = 5

function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints)
    let sum = classPoints.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  sum = sum / classPoints.length
//   console.log(yourPoints)
//   console.log(sum)
    if(yourPoints>sum){
      return true
    }
    else{return false}
  }

  console.log(betterThanAverage(classPoints1,yourPoints1))