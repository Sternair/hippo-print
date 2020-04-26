import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Auth } from 'aws-amplify'

import './SignUpButton.scss';

const SignUpButton = () => {
  const [show, setShow] = useState(false)
  const [userData, setUserData] = useState({ email: '', password: '' })

  const handleClose = () => {
    setUserData({ email: '', password: '' })
    setShow(false)
  }
  const handleShow = () => setShow(true)

  const changeHandler = (event: any) => {
    const name = event.target.name
    const value = event.target.value

    setUserData({
      ...userData,
      [name]: value
    })
  }

  const onSubmit = async () => {
    // await signUp()
    console.log(userData)
    handleClose()
  }

  const signUp = async () => {
    try {
      const user = await Auth.signUp({
        username: userData.email,
        password: userData.password
      })
      console.log({ user })
    } catch (error) {
      console.log('error signing up:', error)
    }
  }

  return (
    <>
      <button className="btn btn-primary btn-sign-up" onClick={handleShow}>
        Sign Up for Hippo Print
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={userData.email} onChange={changeHandler}/>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={userData.password} onChange={changeHandler}/>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onSubmit}>
            Sign Up for Hippo Print
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SignUpButton
