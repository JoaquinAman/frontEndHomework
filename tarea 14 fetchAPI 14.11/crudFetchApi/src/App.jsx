import React, { useEffect, useState } from "react";
import "./App.css";
import AddAlbum from "./components/AddAlbum";
import AddUser from "./components/AddUser";
import Album from "./components/Album";
import User from "./components/User";

const App = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await fetch("https://jsonplaceholder.typicode.com/albums")
        .then((res) => res.json())
        .then((data) => setAlbums(data))
        .catch((err) => {
            console.log(err);
        });
    };

    const onAdd = async (title) => {
        await fetch('https://jsonplaceholder.typicode.com/albums', {
            method: 'POST',
            body: JSON.stringify({
                title:title
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((res) => {
            if(res.status !== 201){
                return
            }else{
                return res.json()
            }
        })
        .then((data) => {
            setAlbums((albums) => [...albums, data]);
        })
        .catch((err) =>{
            console.log(err);
        })
    }

const onDelete = async (id) => {
    await fetch('https://jsonplaceholder.typicode.com/albums/${id}', {
        method: "DELETE"
    })
    .then((res) => {
        if(res.status !== 200) {
            return
        }else{
            setAlbums(albums.filter((album) => {
                return album.id !== id
            }))
        }
    })
    .catch((err) => {
        console.log(err);
    })
}



    console.log(albums);

    return (
        <div className="App">
            
            <br />
            <AddAlbum onAdd={onAdd}/>
            <div>
                {
                    albums.map((album) => (
                        <Album id={album.id} key={album.id} title={album.title} onAdd={onAdd} onDelete={onDelete}></Album>
                    ))
                }
            </div>
        </div>
    )
}
export default App