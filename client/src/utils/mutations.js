import { gql } from "@apollo/client";

export const SAVE_GAME = gql`
  mutation Mutation($input: BookInput) {
    saveBook(input: $input) {
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
