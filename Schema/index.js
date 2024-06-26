const { gql } = require('apollo-server-express');
const userType = require('./userSchema');

const taskType = require('./taskType');
const commentType = require('./commentType');
const projectType = require('./projectType');
const announcementType = require('./announcementType');

const baseType = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

module.exports = [baseType, userType, taskType, commentType,projectType,announcementType];
