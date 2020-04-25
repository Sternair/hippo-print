import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const SignUpButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn btn-primary" onClick={handleShow}>
        Sign Up for Hippo Print
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Sign Up for Hippo Print
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignUpButton;
