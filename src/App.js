import React from 'react'
import {useState} from "react"
import Login from './login/Login.jsx'
import Register from './Register';

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  function toggleHere(goIn){
   setCurrentForm(goIn);
  }
  return (
   <>
  
   {currentForm==="login" ?   <Login Toggle={toggleHere}/> :<Register Toggle={toggleHere}/>}

   </>
  )
}

export default App