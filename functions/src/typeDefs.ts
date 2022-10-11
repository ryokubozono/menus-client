import {gql} from "apollo-server-express";
import {DocumentNode} from "graphql";

export const typeDefs: DocumentNode = gql`
  type Query {
    tests: [Test]
    shops: [Shop!]!
    shop(uid: String!): Shop!
  }

  type Mutation {
    addTest(text: String!): Test!
    createShop(
      input: createShopInput!
    ): Shop!
    updateShop(
      input: updateShopInput!
    ): Shop!
    deleteShop(
      uid: ID!
    ): String!
  }
  
  type Test {
    uid: ID!
    text: String!
  }

  type Shop {
    uid: ID!
    name: String!
    zip: String!
    address: String!
    tel: String!
    note: String!
  }

  input createShopInput {
    name: String!
    zip: String!
    address: String!
    tel: String!
    note: String!
  }

  input updateShopInput {
    uid: String!
    name: String!
    zip: String!
    address: String!
    tel: String!
    note: String!
  }
`;
