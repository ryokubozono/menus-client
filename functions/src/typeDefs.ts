import {gql} from "apollo-server-express";
import {DocumentNode} from "graphql";

export const typeDefs: DocumentNode = gql`
  type Query {
    tests: [Test]
    shops: [Shop!]!
    shop(uid: String!): Shop!
    tag(uid: String!): Tag!
    tagsByShopId(shopUid: String!): [Tag!]
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
    createTag(input: CreateTagInput!): Tag!
    updateTag(input: UpdateTagInput!): Tag!
    deleteTag(uid: String!): String!
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

  type Tag {
    uid: String!
    shop_uid: String!
    name: String!
    note: String!
    sort: Int!
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

  input CreateTagInput {
    shop_uid: String!
    name: String!
    note: String!
    sort: Int!
  }

  input UpdateTagInput {
    uid: String!
    name: String!
    note: String!
    sort: Int!
  }

`;
