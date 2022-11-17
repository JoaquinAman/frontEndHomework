import React, { useEffect, useState } from "react";
// import "./App.css";
import AddAlbum from "./AddAlbum";
import AddUser from "./AddUser";
import Album from "./Album";
import User from "./User";


const ListOfUser = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
         fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => {
            console.log(err);
        });
    };

    const onAdd =  (name, email) => {
         fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                name:name,
                email:email
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
            setUsers((users) => [...users, data]);
        })
        .catch((err) =>{
            console.log(err);
        })
    }

const onDelete = async (id) => {
    await fetch('https://jsonplaceholder.typicode.com/users/${id}', {
        method: "DELETE"
    })
    .then((res) => {
        if(res.status !== 200) {
            return
        }else{
            setUsers(users.filter((user) => {
                return user.id !== id
            }))
        }
    })
    .catch((err) => {
        console.log(err);
    })
}



    console.log(users);

    return (
        <div className="ListOfUser">
            
            <br />
            <AddUser onAdd={onAdd}/>
            <div>
                {
                    users.map((user) => (
                        <User id={user.id} key={user.id} name={user.name} email={user.email} onAdd={onAdd} onDelete={onDelete}></User>
                    ))
                }
            </div>
        </div>
    )
}
export default ListOfUser