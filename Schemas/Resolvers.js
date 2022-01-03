const userData = require('../mockdata.json');


const resolvers = {
    Query: {
        getAllUsers() {
            // javascript logic here to get data from database
            return userData;
        }
    },

    // Mutations
    Mutation: {
        createUser(parent, args) {
            userData.push(args);
            return args;
        }
    },
}

module.exports = { resolvers };