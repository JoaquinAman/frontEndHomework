import './App.css'
import Board from './components/Board'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {

  return (
    <Router>
      <div className="App">
      
          <ResponsiveAppBar/>
          <Routes>
            <Route exact path='/'></Route>
            <Route exact path='/home' element={<Home/>}></Route>
            <Route exact path='/board' element={<Board/>}></Route>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
      </div>
    </Router>
  )
}

export default App