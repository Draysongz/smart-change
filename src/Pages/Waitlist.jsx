import React from 'react'
import './Waitlist.css'
import {db} from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { useState } from 'react'

const Waitlist = () => {
const [email, setEmail] = useState('')

const onSubmit= async (e)=>{
  e.preventDefault()
  try {
    await addDoc(collection(db, "emails"), {
      email: email
    });
    toast('Sucessfully Registered')
  } catch (error) {
    toast.error('An error occurred')
    console.log(error)
  }
}

  return (
    <div>
        <div className="list-container">
          <h1>Join The Waitlist</h1>
          <div className="waitlist-input">
            <input type="email"  placeholder='johndoe@gmail.com' id='email' onChange={e=>setEmail(e.target.value)} required  className="list-input" />
            <button onClick={onSubmit}  className="input-btn">Submit</button>
          </div>
      
        </div>
    </div>
  )
} 

export default Waitlist