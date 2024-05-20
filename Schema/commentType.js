const { gql } = require('apollo-server-express');

const commentType = gql`
  type Comment {
    id: ID!
    taskId: Task!
    userId: User!
    comment: String!
  }

  extend type Query {
    getComment(id: ID!): Comment
    getComments: [Comment]
  }

  extend type Mutation {
    createComment(
      taskId: ID!
      userId: ID!
      comment: String!
    ): Comment
  }
`;

module.exports = commentType;
