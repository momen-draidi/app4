import React from 'react'
import {useState} from "react"
import Swal from 'sweetalert2';
function Register(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handelSubmit(e){
        e.preventDefault();
        console.log("email")
    }
    function register(){
      Swal.fire(
        'Good job!',
        'You Are Register Now',
        'success'
      )
    }
  return (
    <div className='all'>
    <form className='form' onSubmit={handelSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Your Name ?'  value={name} onChange={(e)=>setName(e.target.value)}  />
    <label  htmlFor="email">Email</label>
    <input type="email" placeholder='Your Email ?'   value={email}  onChange={(e)=>setEmail(e.target.value)}/>
    <label htmlFor="password">password</label>
    <input type="password"placeholder='Your password ?'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button type='submit'  className='mt-1 btn-1' onClick={register}>Register</button>
      <button className='mt-2 btn-2' onClick={()=>props.Toggle('login')} >Do you have any account ? Login here</button>
  </form>
    </div>

  )
}

export default Register