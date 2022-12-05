import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import PageNotFound from './pages/PageNotFound'
import Board from './pages/Board/Board'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
  //   <Router>
  //   <div className="App">
  //     <ResponsiveAppBar />
  //     <Routes>
  //       <Route exact={true} path="/"></Route>
  //       <Route exact path="/home" element={<Home />}></Route>
  //       <Route exact path="/board" element={<Board />}></Route>
  //       <Route path="*" element={<PageNotFound />} />
  //     </Routes>
  //   </div>
  // </Router>
  <h1></h1>
  )
}

export default App
