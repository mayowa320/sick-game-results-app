import { gql } from "@apollo/client";

export const GET_RECORDS = gql`
  query ExampleQuery {
    records {
      _id
      description
      date
      game {
        location
        scores
        teams
      }
    }
  }
`;
