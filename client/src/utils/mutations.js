import { gql } from "@apollo/client";

export const SAVE_GAME = gql`
  mutation Mutation($input: RecordInput) {
    saveRecord(input: $input)
  }
`;
export const REMOVE_GAME = gql`
  mutation Mutation($bookId: String) {
    removeBook(bookId: $bookId) {
      _id
      email
      username
      password
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
