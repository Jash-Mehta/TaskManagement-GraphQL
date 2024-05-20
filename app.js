const express = require('express');
const bodyParser = require('body-parser');
const database = require('./Database/database');

const  typeDefs = require('./GraphQL/index');
const resolvers = require('./Controller/index');
const { ApolloServer, gql } = require('apollo-server');

const app = express();

app.use(bodyParser.json());

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});




