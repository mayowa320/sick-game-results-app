import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { SAVE_GAME } from "../utils/mutations";
import { useMutation } from "@apollo/client";

export default function AddCard({ refetch }) {
  const [saveGame] = useMutation(SAVE_GAME);
  let [editable, setEditable] = useState(false);
  let [record, setRecord] = useState({
    description: "",
    date: "",
    game: {
      location: "",
      scores: [0, 0],
      teams: [0, 0],
    },
  });

  function handleInput(event) {
    let { name: key, value } = event.target;
    switch (key) {
      case "team1":
        record.game.teams[0] = value;
        break;
      case "team2":
        record.game.teams[1] = value;
        break;
      case "score1":
        record.game.scores[0] = +value;
        break;
      case "score2":
        record.game.scores[1] = +value;
        break;
      case "location":
        record.game.location = value;
        break;
      default:
        record[key] = value;
    }
    setRecord({ ...record });
  }

  function handleSave() {
    saveGame({ variables: { input: record } });
    refetch();
    setEditable(false);
  }
  return (
    <Card border="dark">
      {editable ? (
        <Card.Body>
          <Card.Title>
            <InputGroup className="mb-3">
              <InputGroup.Text>Teams</InputGroup.Text>
              <Form.Control
                onChange={handleInput}
                name="team1"
                aria-label="Team 1"
              />
              <Form.Control
                onChange={handleInput}
                name="team2"
                aria-label="Team 2"
              />
            </InputGroup>
          </Card.Title>
          <InputGroup className="mb-3">
            <InputGroup.Text>Date</InputGroup.Text>
            <Form.Control
              onChange={handleInput}
              name="date"
              aria-label="Date"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Scores</InputGroup.Text>
            <Form.Control
              onChange={handleInput}
              name="score1"
              aria-label="Score 1"
            />
            <Form.Control
              onChange={handleInput}
              name="score2"
              aria-label="Score 2"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Location</InputGroup.Text>
            <Form.Control
              onChange={handleInput}
              name="location"
              aria-label="Location"
            />
          </InputGroup>

          <InputGroup>
            <InputGroup.Text>Description</InputGroup.Text>
            <Form.Control
              as="textarea"
              name="description"
              onChange={handleInput}
              aria-label="Description"
            />
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
