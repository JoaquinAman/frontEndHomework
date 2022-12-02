import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/board">Board</Link>
            </li>
          </ul>
          {/* <Board/> */}
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/board' element={<Board/>}></Route>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
      </div>
    </Router>
  )
}

export default App
