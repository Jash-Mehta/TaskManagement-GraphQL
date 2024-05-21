const { gql } = require('apollo-server-express');

const projectType = gql`
  type Project {
    id: ID!
    name: String!
    client: String!
    startdate: String!
    deadline: String!
    status: String!
    tasks: [Task!]!
  }

  extend type Query {
    getProject(id: ID!): Project
    getProjects: [Project]
  }

  extend type Mutation {
    createProject(
      name: String!
      client: String!
      startdate: String!
      deadline: String!
      status: String!
    ): Project
  }
`;

module.exports = projectType;
