import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";
import AddCard from "../components/AddCard";

// import { removeBookId } from "../utils/localStorage";
import { GET_RECORDS } from "../utils/queries";
import { REMOVE_GAME } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";

const SavedGames = () => {
  const { data, loading, refetch } = useQuery(GET_RECORDS);

  const [removeRecord] = useMutation(REMOVE_GAME);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteGame = async (recordId) => {
    try {
      const response = await removeRecord(recordId);

      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  // if (!userDataLength) {
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Viewing saved games!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {data.records.length
            ? `Viewing ${data.records.length} saved ${
                data.records.length === 1 ? "game" : "games"
              }:`
            : "I have no saved games!"}
        </h2>
        <CardColumns>
          {data.records.map((record) => {
            return (
              <Card key={record._id} border="dark">
                <Card.Body>
                  <Card.Title>{record.game.teams.join(" vs ")}</Card.Title>
                  <p className="small">Date: {record.date}</p>
                  <p className="small">
                    Scores: {record.game.scores.join(":")}
                  </p>
                  <p className="small">Location: {record.game.location}</p>
                  <Card.Text>{record.description}</Card.Text>
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handleDeleteGame(record._id)}
                  >
                    Delete this Record!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
          <AddCard refetch={refetch} />
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedGames;
