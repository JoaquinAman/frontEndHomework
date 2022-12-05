import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import ResponsiveAppBar from './components/ResponsiveAppBar';
import './index.css'
import Board from './pages/Board/Board';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';


const router = createBrowserRouter([
  {
    
    path:"/",
    // element:<Home />,
    element:<ResponsiveAppBar/>,
    errorElement:<PageNotFound/>                                                                          
  },
  {
    path:"/board",
    element:<Board />
    
  },

]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )


