import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function AddCard() {
  let [editable, setEditable] = useState(false);

  function handleSave() {
    setEditable(false);
  }
  return (
    <Card border="dark">
      {editable ? (
        <Card.Body>
          <Card.Title>
            <InputGroup className="mb-3">
              <InputGroup.Text>Teams</InputGroup.Text>
              <Form.Control aria-label="Team 1" />
              <Form.Control aria-label="Team 2" />
            </InputGroup>
          </Card.Title>
          <InputGroup className="mb-3">
            <InputGroup.Text>Date</InputGroup.Text>
            <Form.Control aria-label="Date" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Scores</InputGroup.Text>
            <Form.Control aria-label="Score 1" />
            <Form.Control aria-label="Score 2" />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Location</InputGroup.Text>
            <Form.Control aria-label="Location" />
          </InputGroup>

          <InputGroup>
            <InputGroup.Text>Description</InputGroup.Text>
            <Form.Control as="textarea" aria-label="Description" />
          </InputGroup>
          <Button
            className="btn-block btn-success"
            onClick={() => handleSave()}
          >
            Save this Record!
          </Button>
        </Card.Body>
      ) : (
        <Card.Body
          className="text-center addCard"
          onClick={() => setEditable(true)}
        >
          <div>+</div>
        </Card.Body>
      )}
      <style>{`
              .addCard {
                font-size: 146px;
                font-weight: bold;
              }
              .addCard:hover {
                background-color: var(--dark);
                color: white;
              }
            `}</style>
    </Card>
  );
}
