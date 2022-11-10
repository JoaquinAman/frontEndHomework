import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import "./Form.css";
import { addError, deleteError } from "../features/Error/errorSlice";
import { useDispatch } from "react-redux";

const uniqueId = () => {
    return Math.floor(Math.random() * Date.now() );
}

export default function Form({dataUser, setDataUser}){
    const {register, handleSubmit} = useForm();
    // const onSubmit = (data) => {
    //     const newData = { ...data, id: uniqueId() }
    //     setDataUser([...dataUser, newData])
    // };
    
    console.log(dataUser);


    const dispatch = useDispatch();
  
    const handleError = (errors) => {
      if (errors.productName) {
        const productNameId = uniqueId();
        dispatch(
          addError({ text: errors.productName?.message, id: productNameId })
        );
        setTimeout(() => dispatch(deleteError({ id: productNameId })), 3000);
      }
  
      if (errors.price) {
        const priceId = uniqueId();
        dispatch(addError({ text: errors.price?.message, id: priceId }));
        setTimeout(() => dispatch(deleteError({ id: priceId })), 4000);
      }
  
      if (errors.description) {
        const descriptionId = uniqueId();
        dispatch(
          addError({ text: errors.description?.message, id: descriptionId })
        );
        setTimeout(() => dispatch(deleteError({ id: descriptionId })), 5000);
      }
    };
  
    const onSubmit = (data) => {};


    return (
        // <div className='formBackground'>
            <div className='formContainer'>

                {/* <form onSubmit={handleSubmit(onSubmit)} className= "form">
                    <input {...register("name")} className= "input"/>
                    <input {...register("lastName")} className= "input"/>
                    <input {...register("age")} className= "inputAge"/>
                    <input {...register("country")} className= "inputCountry"/>
                    <input type="submit" className= "inputSubmit"/>
                </form> */}
                    <form onSubmit={handleSubmit(onSubmit, handleError)}>

                        <>

                            <input
                            placeholder="productName"
                            {...register("productName", { required: "productName is Required" })}
                            />
                            <input
                            placeholder="description"
                            {...register("description", { required: "description is Required" })}
                            />

                            <input
                            placeholder="price"
                            {...register("price", {
                                required: "Price is Required",
                                pattern: {
                                value: /\d+/,
                                message: "Price is number only.",
                                },
                                maxLength: {
                                value: 4,
                                message: "The number should only have 4 digits",
                                },
                            })}
                            />
                            <button>Submit</button>
                        </>
                    </form>
            </div>
        // </div>
    );
}