const { GraphQLSchema } = require('graphql');

const query = require('./query');
const mutation = require('./mutation');

// Schema
const schema = new GraphQLSchema({
    query: query,
    mutation: mutation
});

module.exports = schema;