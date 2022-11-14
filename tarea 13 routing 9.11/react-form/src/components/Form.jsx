import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import "./Form.css";


const uniqueId = () => {
    return Math.floor(Math.random() * Date.now());
}

export default function Form( {dataUser, setDataUser} ){

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const newData = {...data, id: uniqueId()};
        setDataUser([...dataUser, newData])
    };

    console.log(dataUser);
   
    return (
        // style={{'font-size':30, color: 'red', 'background-color': 'cyan', 'text-decoration': 'underline'}}
        <div className='upperContainer' style={{'backgroundColor':'purple'}}>
              
              <Link to="/" style={{ color: 'red', 'text-decoration': 'underline', 'alignSelf':'self-start'
            ,'font-size':20, color: 'red', 'background-color': 'purple', 'text-decoration': 'underline'}}> Home </Link>
            <p></p>
            <div className='formContainer'>
             
            <form onSubmit={handleSubmit(onSubmit)} className= "form" id='myForm'>
                        <input {...register("name")} className= "input" placeholder='name' />
                        <input {...register("lastName")} className= "input" placeholder='last name' />
                        <input {...register("age")} className= "input" placeholder='age' />
                        {/* <input {...register("country")} className= "input" placeholder='4'/> */}
                        <input type="submit" className= "inputSubmit"/>
                    </form>
            </div>
        </div>
    )
}