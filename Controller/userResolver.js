const User = require('./../Model/userModel');
const { ApolloServer, gql } = require('apollo-server');
const { v4: uuidv4 } = require('uuid');

// const users = [];

const resolvers = {
  Query: {
    getUser: (parent, args) => User.find(user => user.id === args.id),
    getUsers: async () => {
        return await User.find();
      },
  },
  Mutation: {
    createUser: async (parent, args) => {
        const newUser = new User({
          name: args.name,
          email: args.email,
          password: args.password,
          employmentType: args.employmentType
        });
  
        try {
          await newUser.save();
          return newUser;
        } catch (error) {
          console.error('Error creating user:', error);
          throw new Error('Error creating user');
        }
      },
    
  },
};



module.exports = resolvers;