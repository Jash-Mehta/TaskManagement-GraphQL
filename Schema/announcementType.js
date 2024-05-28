const { gql } = require('apollo-server-express');

const announcementType = gql`
  type Announcement {
    id: ID!
    title: String!
    createdBy: User!
    startdate: String!
    enddate: String!
  }

  extend type Query {
    getAnnouncement(id: ID!): Announcement
    getAnnouncements: [Announcement]
  }

  extend type Mutation {
    createAnnouncement(
      title: String!
      createdBy: ID!
      startdate: String!
      enddate: String!
    ): Announcement
  }
`;

module.exports = announcementType;
