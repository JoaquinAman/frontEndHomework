import React from 'react'
import Item from './Item'
import "./List.css";

export default function List({ dataUser, setDataUser, deleteItem}){
    return (
        <div className = "listContainer" style={{'backgroundColor':'purple'}}>
            {dataUser.map((user, index) => {
                return <Item key={index} user={user} deleteItem={deleteItem}/>
            })}
            
        </div>
    )
}