import React, { useState, useEffect } from 'react'
import './MyComponent.css';
import {useForm} from 'react-hook-form' 


function Form({addPeople}){
    
    const {register, handleSubmit, formState: {errors}} = useForm()
    
    
    const onSubmit = (data) => {
        addPeople(data)
    }

    
     return (
         <div className='form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('name')} placeholder='name' />
                <input type="number" {...register('age')} placeholder='age'/>
                <button type="submit">submit</button>
             </form>
         </div>
     )
 }
 export default Form