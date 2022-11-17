import React, { useEffect, useState } from "react";
// import "./App.css";
import AddAlbum from "./AddAlbum";
import AddPost from "./AddPost";
import AddUser from "./AddUser";
import Album from "./Album";
import User from "./User";
import Post from "./Post";


const ListOfPost = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
         fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((err) => {
            console.log(err);
        });
    };

    const onAdd =  (title, body) => {
         fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title:title,
                body:body
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
            setPosts((posts) => [...posts, data]);
        })
        .catch((err) =>{
            console.log(err);
        })
    }

const onDelete = async (id) => {
    await fetch('https://jsonplaceholder.typicode.com/posts/${id}', {
        method: "DELETE"
    })
    .then((res) => {
        if(res.status !== 200) {
            return
        }else{
            setPosts(posts.filter((post) => {
                return post.id !== id
            }))
        }
    })
    .catch((err) => {
        console.log(err);
    })
}



    console.log(posts);

    return (
        <div className="ListOfPost">
            
            <br />
            <AddPost onAdd={onAdd}/>
            <div>
                {
                    posts.map((post) => (
                                                                    // body={post.body}    
                        <Post id={post.id} key={post.id} title={post.title}  onAdd={onAdd} onDelete={onDelete}></Post>
                    ))
                }
            </div>
        </div>
    )
}
export default ListOfPost