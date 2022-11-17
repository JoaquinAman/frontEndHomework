import React from "react";
import "./App.css";
import ListOfAlbum from "./components/ListOfAlbum";
import ListOfUser from "./components/ListOfUser";
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
