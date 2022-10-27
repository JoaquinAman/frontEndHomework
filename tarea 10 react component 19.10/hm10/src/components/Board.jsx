import React, { useState, useEffect } from 'react'
import Form from './Form'
import OutputList from './OutputList'

function Board(){

    const [board, setBoard] = useState([]);
 
     useEffect(() => {
         
         },[board])

    const addPeople = (item) => {
        setBoard([...board, item])
    }

     return (
         <div className='container'>
             <Form addPeople={addPeople} />
         </div>
     )
 }
 export default Board