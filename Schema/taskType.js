const { gql } = require('apollo-server-express');

const taskType = gql`
  type Task {
    id: ID!
    title: String!
    projectName: Project!
    assignto: User!
    taskDescription: String!
    timeline: String!
    priority: String!
    comments: [Comment!]!
  }

  extend type Query {
    getTask(id: ID!): Task
    getTasks: [Task]
  }

  extend type Mutation {
    createTask(
      title: String!,
      projectName: ID!,
      assignto: ID!,
      taskDescription: String!,
      timeline: String!,
      priority: String!
    ): Task
  }
`;

module.exports = taskType;
