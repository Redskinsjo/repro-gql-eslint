import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    id: ID
    email: String
    firstname: String
    lastname: String
    fullname: String
    picture: String
    picture: String
  }

  input UserInput {
    email: String
    firstname: String
    lastname: String
    fullname: String
    picture: String
  }

  type Query {
    user(email: String): User
  }

  type Mutation {
    createUser(data: UserInput): User
  }
`;

export default typeDefs;
