import { async } from '@firebase/util'
import React from 'react'
import {useState,useEffect} from 'react'
import { addDoc, collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import {db,auth} from '../firebase-config'
import { useNavigate } from 'react-router-dom'


export default function MyBlogs(props) {
    const nav = useNavigate()

    const [myblogs, setmyblogs] = useState([])
    const postcollectionref = collection(db, "bloggermonkey-posts")
    const deletepost = async (id) => {
        const a = doc(db, "bloggermonkey-posts", id);
        await deleteDoc(a)

    }
    useEffect(() => {
      if(!localStorage.getItem("isAuth"))
      {
          nav("/login")


      }
    }, [])
    

    useEffect(() => {
        const getmyblogs=async()=>{
            const data = await getDocs(postcollectionref)
            setmyblogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));


        }

        getmyblogs()
      
    }, [])
    

  return (
    <div className='text-center'>
        <h1>My Blogs</h1>

        {myblogs.map((mb)=>{
            return mb.idd===auth.currentUser.uid?<div className='ms-auto me-auto parent' style={{ border: '2px solid black', width: '500px',height:'auto', borderRadius: '10px', marginBottom: '20px' }}>
            <div className=" text-center">
                <div className='text-center' style={{ color: 'red' }}><h3 className='text-center'>{mb.title}</h3>        </div>


            </div>
            <div className='text-center ms-auto me-auto' style={{ width: '400px' }}>{mb.content}</div><br />
            <div className="parent1">
                <div> <h4>@{mb.name}</h4></div>



                <div style={{paddingBottom:'0px!important '}} >
                    {props.isAuth && mb.idd === auth.currentUser.uid && (<button onClick={() => deletepost(mb.id)} style={{ border: "none" }}><img style={{ width: '35px' }} src="https://cdn-icons.flaticon.com/png/512/4980/premium/4980658.png?token=exp=1651427785~hmac=aa25dd12c873e189d30b1467007b8ca9" alt="" /></button>)}
                </div>
            </div>

            
        </div>

                :''
        })}

    </div>
  )
}
