import {gql} from "apollo-server-express";
import {DocumentNode} from "graphql";

export const typeDefs: DocumentNode = gql`
  type Query {
    tests: [Test]
  }

  type Mutation {
    addTest(text: String!): Test
  }
  
  type Test {
    uid: ID!
    text: String!
  }
`;
