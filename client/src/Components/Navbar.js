import React from 'react'
import {Link} from 'react-router-dom'
import {signOut} from 'firebase/auth'
import {auth} from '../firebase-config'

export default function Navbar(props) {

    const logout=()=>{
        signOut(auth).then(()=>{
          localStorage.clear()
          props.setisAuth(false)
          window.location.pathname="/login"
    
    
    
        })
    
      }
    
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{height:'50px'}}>
  <div className="container-fluid" style={{fontSize:'1px'}}>
    <img src="https://cdn-icons-png.flaticon.com/128/616/616423.png" style={{width:"25px"}} alt="" />
    <Link className="navbar-brand"  to="/"  style={{fontSize:'21px',fontFamily:'Inconsolata'}}>Blogger Monkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav    " style={{marginLeft:'30%',fontFamily:'Inconsolata'}}>
        <li className="nav-item">
          {!props.isAuth && <Link className="nav-link active" aria-current="page" to="/">Home</Link>}
        </li>
        <li className="nav-item">
          {props.isAuth  &&<Link className="nav-link" to="/feed">Feed</Link>}
        </li>
        <li className="nav-item">
          {props.isAuth  &&<Link className="nav-link" to="/createpost">Post</Link>}
        </li>

        <li className="nav-item">
          {props.isAuth  &&<Link className="nav-link" to="/myblogs">My Blogs</Link>}
        </li>
        
        <li className="nav-item">
        { !props.isAuth? <Link className="nav-link" to="/login">Login</Link>:<Link className="nav-link" onClick={logout} to="/" >Log out</Link>}
        </li>
       
        
       
      </ul>
      <ul className="navbar-nav  ms-auto  " style={{marginLeft:'30%',fontFamily:'Inconsolata',fontSize:'20px'}}>
        <li className="nav-item">
          {props.isAuth && <div className="nav-link active" aria-current="page" to="/feed">{auth.currentUser.displayName}</div>}
        </li>
       
       
        
       
      </ul>
      
    </div>
    {/* <div className="">
    <ul className="navbar-nav   " style={{marginLeft:'50%',fontFamily:'Inconsolata'}}>
    <li className="nav-item">
        { !props.isAuth? <Link className="nav-link" to="/login">Login</Link>:<Link className="nav-link" onClick={logout} to="/" >Log out</Link>}
        </li>

      </ul>

    </div> */}
  </div>
</nav>
    </>
  )
}
