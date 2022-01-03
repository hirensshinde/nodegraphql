const express = require('express');
const app = express();
const router = require('./user/route');
const logger = require('morgan');
require('dotenv').config();
const port = process.env.PORT || 8000;
// const userData = require('./mockdata.json');
// const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } =require('graphql');
// const { graphqlHTTP } = require('express-graphql');
// const schema = require('./Schemas/index');
app.use(logger('dev'));
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./Schemas/TypeDefs');
const { resolvers } = require('./Schemas/Resolvers');
const { doTypesOverlap } = require('graphql');

// setup apolloserver
let server;
async function startServer() {
    server = new ApolloServer({
        typeDefs,
        resolvers
    });
    await server.start();
    server.applyMiddleware({ app });
}

startServer();


// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true
// }))

app.use('/user', router);

app.listen(port, (err, req, res) => {
    if(err) console.log("Error",err);
    else {console.log(`Server is running on port ${port}${server.graphqlPath}`)};
});