import React from 'react'
import './App.css'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import { Homepage } from './components/Homepage';
import { LandingPage } from './components/LandingPage';

function App() {
  
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/home", element: <Homepage /> },
    
  ])
  return (
    <>
      
      <RouterProvider router={router}/>
    </>
  )
}

export default App
