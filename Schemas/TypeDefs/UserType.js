const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } =require('graphql');
const { gql } = require('apollo-server-express');


const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        id: { type: GraphQLInt },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
        ip_address: { type: GraphQLString }, 
    })
})




module.exports = UserType;
