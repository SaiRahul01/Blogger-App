
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './Components/Home';
import Login from './Components/Login';
import React,{useState} from 'react';
import './App.css'
import CreatePost from "./Components/CreatePost";
import Navbar from "./Components/Navbar";
import {signOut} from 'firebase/auth'

import {auth} from './firebase-config'
import Feed from "./Components/Feed";
import MyBlogs from "./Components/MyBlogs";

function App() {

  const [isAuth, setisAuth] = useState(localStorage.getItem("isAuth"))
  
  return (
    <>
  
     <Router>
     <Navbar isAuth={isAuth} setisAuth={setisAuth}/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/login" element={<Login  setisAuth={setisAuth}/>}/>
        {<Route exact path="/createpost" element={<CreatePost isAuth={isAuth}/>}/>}
        <Route exact path="/myblogs" element={<MyBlogs isAuth={isAuth} />}></Route>
        {<Route exact path="/feed" element={<Feed isAuth={isAuth}/>}/>}
      </Routes>
        
    </Router>

    </>
   
  );
}

export default App;
