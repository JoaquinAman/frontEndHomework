import React from "react";
import './User.css'

const User = ({id, email, name, onDelete}) => {
    
    const handleDelete = () => {
        onDelete(id)
    }
    
    return (
        <div className="list">
                <span data-testid="userNameId">{name}</span>
                <span data-testid="userEmailId">{email}</span>
                <span>
                    <button>edit</button>
                    <button data-testid="deleteButtonId" onClick={handleDelete}>delete</button>
                </span>
        </div>
    )
}
export default User