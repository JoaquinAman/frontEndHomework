import React, { useEffect, useState } from 'react'
import Bar from './Bar';
import './Board.css'

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Board() {

    useEffect(() => {
        console.log('object');
        generateArr()
    }, [])

    const [bars, setBars] = useState([])

    const [bars2, setBars2] = useState([])

    const generateArr = () => {
        const myArr = []

        for (let i = 1; i <= 7; i++) {
            let value = generateRandomIntegerInRange(-1000, 1000);
            const myObj = {
                id: i,
                text: value
            }
            myArr.push(myObj)
        }
        setBars(myArr) 
    }

    const heapSort = async (arr) => {
        const valueArr = arr.map(e => {
            return e.text
        })
        console.log("first");
        console.log(valueArr);
    
        const firstArr = [...valueArr]
        const secArr = [...valueArr]
    
        for (let i = 1; i < firstArr.length; i++) {
            const max = secArr.reduce((a, b) => Math.max(a, b), -Infinity);
            const maxIndexArr = firstArr.indexOf(max);
            firstArr[maxIndexArr] = firstArr[firstArr.length-i];
            firstArr[firstArr.length-i] = max;
    
            const maxIndexSecArr = secArr.indexOf(max);
            secArr.splice(maxIndexSecArr, 1); 
        }
        console.log("final:");
        console.log(firstArr);
    
        const tempArr = []
        for (let i = 0; i < firstArr.length; i++) {
         
            const myObj = arr.filter(e => e.text == firstArr[i])
            
            tempArr.push(myObj) 
        }
        const finalArr = tempArr.flat()
        console.log("final objs:");
        console.log(finalArr);

        finalArr.reverse()

        console.log(bars2)

        for (let i = 0; i < finalArr.length; i++) {
            await sleep(500);
            setBars2((prev) => ([...prev, finalArr[i]]))
        }
    }

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    return (
        <>

            <div className='boardContainer'>

                {bars.map(bar => (
                    <Bar key={bar.id} id={bar.id} barValue={bar.text} />
                ))} 

            </div>
       
            <div className='button'>
                
                <button onClick={() => heapSort(bars)}>heap sort</button>
                
            </div>

            <div className='boardContainer2'>
                {bars2 ? bars2.map(bar => (

                        <Bar key={'result ' + bar.id} id={bar.id} barValue={bar.text} />
                        
                    )) : null} 
            </div>

        </>
    )
}

export default Board