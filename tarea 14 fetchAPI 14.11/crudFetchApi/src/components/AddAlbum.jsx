import React from "react";

const AddAlbum = ({onAdd}) => {

const handleOnSubmit = (e) => {
    e.preventDefault()
    onAdd(e.target.title.value)
    e.target.title.value = ""
}

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <h3>Add Album</h3>
                <input placeholder="Title" name="title" type="text" />
                <button onSubmit={handleOnSubmit}> Add </button>
                <hr />
            </form>
        </div>
    )
}
export default AddAlbum