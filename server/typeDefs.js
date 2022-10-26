const { gql } = require("graphql-tag");

const typeDefs = gql`
  type Query {
    records: [Record]
  }

  type Mutation {
    saveRecord(input: RecordInput): String
    removeRecord(recordId: String): Boolean
  }

  type Record {
    _id: String
    description: String!
    game: Game!
    date: String
  }

  input RecordInput {
    _id: String
    description: String!
    game: GameInput!
    date: String
  }

  type Game {
    teams: [String!]
    scores: [Int!]
    location: String
  }
  input GameInput {
    teams: [String!]
    scores: [Int!]
    location: String
  }
`;

module.exports = typeDefs;

// type Query {
//   me: User
// }
// type Mutation {
//   login(email: String, password: String): Auth
//   addUser(username: String, password: String, email: String): Auth
//   saveBook(input: BookInput): User
//   removeBook(bookId: String): User
// }
// type User {
//   _id: Int
//   email: String
//   username: String
//   password: String
//   bookCount: Int
//   savedBooks: [Book]
// }
// input BookInput {
//   bookId: String
//   authors: [String]
//   description: String
//   title: String
//   image: String
//   link: String
// }
// type Book {
//   bookId: String
//   authors: [String]
//   description: String
//   title: String
//   image: String
//   link: String
// }
// type Auth {
//   token: String
//   user: User
// }
