const userResolver = require('./userResolver');

const taskResolver = require('./taskResolver');
const commentResolver = require('./commentResolver');
const projectResolver = require('./pojectResolver');
const { mergeResolvers } = require('@graphql-tools/merge');

const resolvers = mergeResolvers([userResolver, taskResolver, commentResolver, projectResolver]);

module.exports = resolvers;
