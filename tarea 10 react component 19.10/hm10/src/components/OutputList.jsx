import React, { useState, useEffect } from 'react'

function OutputList(){

    const [outputList, setOutputList] = useState();
 
     useEffect(() => {
         setTimeout(function () {
                     setOutputList([firstOutputList, secondOutputList])
             }, 3000);
         },[outputList])
     return (
         <div className='container'>
             
         </div>
     )
 }
 export default OutputList