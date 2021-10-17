const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    user(id: String): User
    users: [User]
  }
  type User {
    id: String
    name: String
    rank: Rank
    points: Int
    createdAt: String
    updatedAt: String
  }

  type Rank {
    id: String
    name: String
    createAt: String
    updateAt: String
  }
  type Mutation {
    createUser(name: String): User
    updateUser(name: String): User
  }
`;

module.exports = typeDefs;
