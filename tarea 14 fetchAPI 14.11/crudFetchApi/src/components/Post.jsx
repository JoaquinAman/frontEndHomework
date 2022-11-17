import React from "react";
import './Post.css'

const Album = ({id, title, body, onDelete}) => {
    
    const handleDelete = () => {
        onDelete(id)
    }
    
    return (
        <div className="list">
                
                <span data-testid="postTitleId" >{title}</span>
                <span data-testid="postBodyId" >{body}</span>
                <span>
                    <button>edit</button>
                    <button data-testid="deleteButtonId"  onClick={handleDelete}>delete</button>
                </span>
        </div>
    )
}
export default Album