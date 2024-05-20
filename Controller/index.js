const userResolver = require('./userResolver');

const taskResolver = require('./taskResolver');
const { mergeResolvers } = require('@graphql-tools/merge');

const resolvers = mergeResolvers([userResolver, taskResolver]);

module.exports = resolvers;
