import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css';
export default function Welcome() {
    const navigate =  useNavigate();
    const handleStart = ()=>{
        navigate('/survey');
    }
    
  return (
    <div className='container-W'>
      <div className='main-W'>
      <h1>Welcome to our survey!</h1>
      <p>Thank you for taking the time to provide your feedback.</p>
      <button onClick={handleStart}>Start</button> 
    </div>
    </div>
  )
}
