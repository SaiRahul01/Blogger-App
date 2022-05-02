import React from 'react'
import {auth,provider} from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import './Login.css'
export default function Login({setisAuth}) {


  let navigate=useNavigate()

  const signinwithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{

      
      localStorage.setItem("isAuth",true)
      setisAuth(true)
      navigate("/feed")


    })

  }

  return (
    <><br />
    <div className="loginpage text-center mt-8">
      
      <h1 style={{fontSize:'40px'}}>Google Login</h1>
      <br /><br /><br /><br />
      <button className="btn gbtn " onClick={signinwithGoogle} style={{border:'2px solid black',boxShadow:'white'}}>
        <img src='https://img.icons8.com/color/2x/google-logo.png' style={{height:'40px'}} alt=''></img><b className='gg' >    Log in with Google</b> 
        </button>
        
    </div>
    </>
  )
}
