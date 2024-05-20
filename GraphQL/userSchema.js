const { ApolloServer, gql } = require('apollo-server');
const { v4: uuidv4 } = require('uuid');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    employmentType: String!
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!, employmentType: String!): User
  }
`;

module.exports = typeDefs;