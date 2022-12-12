import React from 'react'
import './Waitlist.css'
import {firebaseConfig} from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react'
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Waitlist = () => {
const [email, setEmail] = useState('')
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const onSubmit= async(e)=>{
  e.preventDefault()
  const app= initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
  try {
    await addDoc(collection(db, "emails"), {
      email: email
    });
    handleShow()
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
        <Modal   
      aria-labelledby="contained-modal-title-vcenter"
      centered 
      show={show} 
      onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Waitlisted!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Registration Successful</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" id='modalbtn' onClick={handleClose}>
            Great
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  )
} 

export default Waitlist