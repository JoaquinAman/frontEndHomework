import React from "react";
import './Album.css'

const Album = ({id, title, onDelete}) => {
    
    const handleDelete = () => {
        onDelete(id)
    }
    
    return (
        <div className="list">
                
                <span>{title}</span>
                <span>
                    <button>edit</button>
                    <button onClick={handleDelete}>delete</button>
                </span>
        </div>
    )
}
export default Album