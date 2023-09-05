import React from 'react'
import {useState} from "react"
import { Route, Routes } from 'react-router-dom';
import Login from './login/Login.jsx'
import Register from './Register';
import Home from './home/Home.jsx'

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  function toggleHere(goIn){
   setCurrentForm(goIn);
  }
  return (
   <>
    <Routes>
      <Route path='/' element={currentForm==="login" ?   <Login Toggle={toggleHere}/> :<Register Toggle={toggleHere}/>}></Route>
      <Route path='/Home' element={<Home/>}>
      </Route>
    </Routes>
 

   </>
  )
}

export default App