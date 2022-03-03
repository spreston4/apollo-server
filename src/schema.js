const { gql } = require("apollo-server");

const typeDefs = gql`
  type Link {
    id: Int!
    url: String!
    slug: String!
  }

  type Query {
    getLink(id: Int!): Link
    getAllLinks: [Link!]!
  }

  type Mutation {
    createLink(url: String!, slug: String!): Link!
  }
`;

module.exports = typeDefs;
