import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'
export default function Thanks() {
    const navigate = useNavigate()
    useEffect(()=>{
        const id =  setTimeout(() => {     
          navigate('/')
        }, 5000);
        return()=>clearTimeout(id)
      },[])
  return (
    <div className='main-T'>
      <h3>Thank you for giving us your valuable time</h3>
      <h5>Have a nice day ! 😊</h5>
    </div>
  )
  
}
