const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        first_name: String!
        last_name: String!
        email: String!
        gender: String!
        country: String!
    }

    enum NATIONALITIES {
        
    }

    # Queries
    type Query {
        getAllUsers: [User!]!
    }

    # Mutations
    type Mutation {
        createUser(
            first_name: String!
            last_name: String!
            email: String!
            gender: String!
        ): User!
    }
`

module.exports = { typeDefs };