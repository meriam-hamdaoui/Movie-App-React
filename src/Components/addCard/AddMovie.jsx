import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./addMovie.css";

function AddMovie({ addToList }) {
  //those are the states of our modal display
  const [show, setShow] = useState(false);
  //we need a state to track changes on our inputs
  //i'm gonna create one state as an object for all the inputs
  const [inputFields, setInputFields] = useState({
    title: "",
    year: "",
    description: "",
    posterURL: "",
    rating: "",
    trailerURL: "",
  });

  //those are predefined functions cames along with the modal
  //which handls the show close and save buttons
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    handleClose();
    addToList(inputFields);
  };

  //we need a function to handle the input fields
  const handleInputs = (e) => {
    //distruct our event objects
    const { name, value } = e.target;
    setInputFields((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  return (
    <>
      <Button
        style={{ borderRadius: "25px", width: "430px", margin: "1%" }}
        className="movieCard"
        variant="outline-warning"
        onClick={() => handleShow()}
      >
        <span className="addSpan">
          <i className="fa-solid fa-plus"></i>
        </span>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                onChange={(e) => handleInputs(e)}
                //   value={inputFields.title}
                name="title"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Movie release Year</Form.Label>
              <Form.Control
                onChange={(e) => handleInputs(e)}
                // value={inputFields.year}
                name="year"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>URL movie poster</Form.Label>
              <Form.Control
                onChange={(e) => handleInputs(e)}
                // value={inputFields.posterURL}
                name="posterURL"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label rows="3">movie description</Form.Label>
              <Form.Control
                onChange={(e) => handleInputs(e)}
                // value={inputFields.description}
                name="description"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>trailer url</Form.Label>
              <Form.Control
                onChange={(e) => handleInputs(e)}
                // value={inputFields.trailerURL}
                name="trailerURL"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>rating</Form.Label>
              <Form.Control
                onChange={(e) => handleInputs(e)}
                // value={inputFields.rating}
                name="rating"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleClick()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
