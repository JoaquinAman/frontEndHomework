import React, { useState, useEffect } from 'react'

function MyTest(){
    const arr = [1,2,'aasf', 'pepe','1','123',123] //== [1,2,123]
    const second=[]
    const myFilter = arr.map(e => {
        if(!isNaN(e)){
            second.push(e)
        }
    })
    function secFilter(second){
        return second.filter(x => typeof x === "number")
    }
    const scFil = second.filter(x => typeof x === "number")
    

    console.log(scFil)

function printer (){
    for (let i = 0; i < second.length; i++) {
        return second[i] + ' '
        
    }
}

    return  <div>{
        scFil[0] + ' ' + 
        scFil[1] + ' ' + 
        scFil[2] + ' ' 
     
                
            }</div>
 }
 export default MyTest