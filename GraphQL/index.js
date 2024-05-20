const { gql } = require('apollo-server-express');
const userType = require('./../GraphQL/userSchema');

const taskType = require('./taskType');

const baseType = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

module.exports = [baseType, userType, taskType];
