// import React, { useEffect, useState } from "react";
// import "./App.css";
// import AddAlbum from "./components/AddAlbum";
// import AddUser from "./components/AddUser";
// import Album from "./components/Album";
// import User from "./components/User";


// const App = () => {
//     const [albums, setAlbums] = useState([]);
//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = () => {
//          fetch("https://jsonplaceholder.typicode.com/albums")
//         .then((res) => res.json())
//         .then((data) => setAlbums(data))
//         .catch((err) => {
//             console.log(err);
//         });
//     };

//     const onAdd =  (title) => {
//          fetch('https://jsonplaceholder.typicode.com/albums', {
//             method: 'POST',
//             body: JSON.stringify({
//                 title:title
//             }),
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8",
//             }
//         })
//         .then((res) => {
//             if(res.status !== 201){
//                 return
//             }else{
//                 return res.json()
//             }
//         })
//         .then((data) => {
//             setAlbums((albums) => [...albums, data]);
//         })
//         .catch((err) =>{
//             console.log(err);
//         })
//     }

// const onDelete = async (id) => {
//     await fetch('https://jsonplaceholder.typicode.com/albums/${id}', {
//         method: "DELETE"
//     })
//     .then((res) => {
//         if(res.status !== 200) {
//             return
//         }else{
//             setAlbums(albums.filter((album) => {
//                 return album.id !== id
//             }))
//         }
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }



//     console.log(albums);

//     return (
//         <div className="App">
            
//             <br />
//             <AddAlbum onAdd={onAdd}/>
//             <div>
//                 {
//                     albums.map((album) => (
//                         <Album id={album.id} key={album.id} title={album.title} onAdd={onAdd} onDelete={onDelete}></Album>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }
// export default App
import React, { useEffect, useState } from "react";
import "./App.css";
import AddAlbum from "./components/AddAlbum";
import AddUser from "./components/AddUser";
import Album from "./components/Album";
import ListOfAlbum from "./components/ListOfAlbum";
import ListOfUser from "./components/ListOfUser";
import User from "./components/User";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import ListOfPost from "./components/ListOfPost";

const App = () => {

    return (
        <Router>
            <div className="App">

                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/users">Users</Link>
                    </li>
                    <li>
                    <Link to="/albums">Albums</Link>
                    </li>
                    <li>
                    <Link to="/posts">Posts</Link>
                    </li>
                </ul>

                <Routes>
                    <Route exact path='/users' element={< ListOfUser />}></Route>
                    <Route exact path='/albums' element={< ListOfAlbum />}></Route>
                    <Route exact path='/posts' element={< ListOfPost />}></Route>
                </Routes>
              
            </div>
        </Router>
    )
}
export default App
