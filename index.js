const express = require('express');
const app = express();
const router = require('./user/route');
const logger = require('morgan');
const port = process.env.PORT || 8000;
const userData = require('./mockdata.json');
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } =require('graphql');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schemas/index');
app.use(logger('dev'));
const { ApolloServer } = require('apollo-server-express');


// setup apolloserver
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.use('/user', router);


app.listen(port, (err) => {
    if(err) console.log("Error",err);
    else {console.log(`Server is running on port ${port}`)};
})