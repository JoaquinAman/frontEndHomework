import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import WelcomePage from './components/WelcomePage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

function App(){
  const [dataUser, setDataUser] = useState([]);

  const deleteItem = (id) => {
    const filtredUser = dataUser.filter((user) => user.id !== id)
    setDataUser(filtredUser);
  }

  return <div className='App'>
    {/* <WelcomePage/> */}
    <Form dataUser = {dataUser} setDataUser = {setDataUser} />
    <List dataUser = {dataUser} setDataUser = {setDataUser} deleteItem={deleteItem}/>
  </div>;
}

export default App;