const userResolver = require('./userResolver');

const taskResolver = require('./taskResolver');
const commentResolver = require('./commentResolver');
const { mergeResolvers } = require('@graphql-tools/merge');

const resolvers = mergeResolvers([userResolver, taskResolver, commentResolver]);

module.exports = resolvers;
