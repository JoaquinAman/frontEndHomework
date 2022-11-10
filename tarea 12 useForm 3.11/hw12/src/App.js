import './App.css';
import {useState} from "react"
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";
import ErrorList from './features/Error/ErrorList';

function App() {

  const [dataUser, setDataUser] = useState([]);

  const deleteItem = (id) =>{
    const filtredUser = dataUser.filter((user) => user.id !== id )
    setDataUser(filtredUser);
  }

  return (
    <div className= "App">
      {/* <Form dataUser={dataUser} setDataUser={setDataUser} /> */}
      {/* <List dataUser={dataUser} setDataUser={setDataUser} deleteItem={deleteItem}/> */}
      <Form/>
      <ErrorList />
    </div>
  )
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <Form />
//       <div>
//         <ErrorView />
//       </div>
//     </div>
//   );
// }

// export default App;