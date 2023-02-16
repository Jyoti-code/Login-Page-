import React from 'react'
import "./homepage.css";
import {useNavigate} from "react-router-dom"

const Homepage=()=> {
  const navigate =useNavigate();
  return (
    <div className='homepage'>
      <h1><marquee>Welcome to Our Homepage</marquee></h1>
      {/* <div className='button'>Logout</div> */}
      <div className='button' onClick={()=>navigate("/login")}>Login</div>
      <div className='button' onClick={()=>navigate("/register")}>Register</div>
    </div>
  )
}

export default Homepage
