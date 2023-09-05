import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate =useNavigate();

  function Back() {
  navigate(-1)
  }
  return (
<>
   <div className="home">
 
    <button type='button' onClick={Back} className=' btn btn-info text-white btn-3'  >Back to Login Home</button>
   </div>

</>  )
}

export default Home