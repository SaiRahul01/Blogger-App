import React from 'react'
import {auth,provider} from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

export default function Login({setisAuth}) {

  let navigate=useNavigate()

  const signinwithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{

      
      localStorage.setItem("isAuth",true)
      setisAuth(true)
      navigate("/")


    })

  }

  return (
    <>
    <div className="loginpage text-center mt-8">
      
      <h1 style={{fontSize:'40px'}}>Sign in With Google</h1>
      <br /><br />
      <button className="btn btn-primary" onClick={signinwithGoogle}>Login</button>
    </div>
    </>
  )
}
