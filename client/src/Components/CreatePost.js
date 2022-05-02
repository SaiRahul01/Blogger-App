import React from 'react'
import { useState,useEffect } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import { db,auth } from '../firebase-config'
import {useNavigate} from 'react-router-dom'


export default function CreatePost(props) {
  const nav=useNavigate()

  const [title, settitle] = useState('')
  const [content, setcontent] = useState('')
const postcollectionref=collection(db,"bloggermonkey-posts")

useEffect(() => {
  if(!props.isAuth)
  {
    nav("/login")
  }
  document.title="Blogger Monkey | Post"
}, [])



  const createpost=async()=>{
      await addDoc(postcollectionref,{title,content,name:auth.currentUser.displayName ,idd:auth.currentUser.uid})
      nav("/feed")
  }

  return (
    <>
      <div className='createpost mt-3 text-center'>
        <div className="cp ">
          <h1 style={{ fontSize: '30px' }}>Create a Post</h1><br />
          <div className="container" style={{border:'2px solid black',width:'600px',borderRadius:'5px'}}>
          <div class="input-group flex-nowrap text-center ms-auto me-auto" style={{width:'500px',padding:'20px'}}>
            {/* <label class="input-group-text" style={{height:'50px'}}>Title</label> */}
            <input type="text" class="form-control" onChange={e=>settitle(e.target.value)} placeholder="Title of the Post" required />
          </div>
          <br />
          <div className='text-center ms-auto me-auto'>
            <textarea class="form-control ms-auto me-auto" onChange={e=>setcontent(e.target.value)} style={{border:'2px solid black',width:'500px',height:'350px'}} placeholder="Type Something">

            </textarea>
          </div>
          <div style={{padding:'20px'}}>
          <button onClick={createpost} className='btn btn-outline-success' >POST</button>
          </div>
          
          </div>
        </div>

      </div>
    </>
  )
}
