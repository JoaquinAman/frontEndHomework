import React, { useState, useEffect } from 'react'
import './MyComponent.css'

const firstCar = {
    make: 'Ford',
    year: 1969
  };
const secondCar = {
    make: 'Audi',
    year: 2007
  };

function MyComponent(){

   const [car, setCar] = useState();

    useEffect(() => {
        setTimeout(function () {
                    setCar([firstCar, secondCar])
            }, 3000);
        },[car])
    return (
        <div className='container'>
            { !car ?
                <div className='loader'> Loading </div>
                    : 
                (   <>
                        <div className='card1'>
                            <h1>{ car[0].make} - {car[0].year}</h1>
                        </div>
                        <div className='card2'>
                            <h2>{car[1].make} - {car[1].year}</h2>    
                        </div>
                    </>
                ) 
            }
        </div>
    )
}
export default MyComponent