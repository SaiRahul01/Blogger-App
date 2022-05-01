
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './Components/Home';
import Login from './Components/Login';
import React,{useState} from 'react';
import './App.css'
import CreatePost from "./Components/CreatePost";
import Navbar from "./Components/Navbar";
import {signOut} from 'firebase/auth'

import {auth} from './firebase-config'

function App() {

  const [isAuth, setisAuth] = useState(false)
  
  return (
    <>
  
     <Router>
     <Navbar isAuth={isAuth} setisAuth={setisAuth}/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/login" element={<Login  setisAuth={setisAuth}/>}/>
        <Route exact path="/createpost" element={<CreatePost/>}/>
      </Routes>
        
    </Router>

    </>
   
  );
}

export default App;
