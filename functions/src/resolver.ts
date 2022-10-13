import * as admin from "firebase-admin";
import {v4 as uuidv4} from 'uuid';

admin.initializeApp();

export const resolvers = {
  Query: {
    async tests() {
      const tests = await admin.firestore().collection("tests").get();
      return tests.docs.map((test) => test.data());
    },
    async shops() {
      const shops = await admin.firestore().collection("shops").get();
      return shops.docs.map((shop) => shop.data());
    },
    shop: async ( _:null, {uid}: { uid: string } ) => {
      const shopDoc = await admin.firestore().doc(`shops/${uid}`).get();
      const shop = shopDoc.data();
      return shop;
    },
    tag: async ( _:null, {uid}: { uid: string } ) => {
      const tagDoc = await admin.firestore().doc(`tags/${uid}`).get();
      const tag = tagDoc.data();
      return tag;
    },
    tagsByShopId: async ( _:null, {shopUid}: {shopUid: string} ) => {
      const tags = await admin.firestore().collection("tags")
      .where("shop_uid", "==", shopUid)
      .get();
      return tags.docs.map((tag) => tag.data());
    },
  },
  Mutation: {
    addTest: async (_: null, {text}: { text: string }) => {
      const uid = uuidv4()
      await admin.firestore().collection("tests").doc(uid).set({
        uid: uid,
        text: text,
      });
      const testDoc = await admin.firestore().doc(`tests/${uid}`).get();
      const test = await testDoc.data();
      return test;
    },
    createShop: async (
      _: null,
      {input}: { input: {
        name: string,
        zip: string,
        address: string,
        tel: string,
        note: string
      } },
    ) => {
      const uid = uuidv4()
      await admin.firestore().collection("shops").doc(uid).set({
        uid: uid,
        name: input.name,
        zip: input.zip,
        address: input.address,
        tel: input.tel,
        note: input.note,
      });
      const shopDoc = await admin.firestore().doc(`shops/${uid}`).get();
      const shop = await shopDoc.data();
      return shop;
    },
    updateShop: async(_: null, {input}: { input: {
      uid: string,
      name: string,
      zip: string,
      address: string,
      tel: string,
      note: string
    } }) => {
      const uid = input.uid
      const shopRef = admin.firestore().collection("shops").doc(uid)
      await shopRef.update({
        name: input.name,
        zip: input.zip,
        address: input.address,
        tel: input.tel,
        note: input.note,
      })
      const shopDoc = await admin.firestore().doc(`shops/${uid}`).get();
      const shop = shopDoc.data();
      return shop;
    },
    deleteShop: async(_:null, {uid}: { uid: string }) => {
      await admin.firestore().collection("shops").doc(uid).delete();
      return uid
    },
    createTag: async (
      _: null,
      {input}: { input: {
        shop_uid: string,
        name: string,
        note: string,
        sort: number,
      } },
    ) => {
      const uid = uuidv4()
      await admin.firestore().collection("tags").doc(uid).set({
        uid: uid,
        shop_uid: input.shop_uid,
        name: input.name,
        note: input.note,
        sort: input.sort,
      });
      const tagDoc = await admin.firestore().doc(`tags/${uid}`).get();
      const tag = await tagDoc.data();
      return tag;
    },
    updateTag: async(_: null, {input}: { input: {
      uid: string,
      name: string,
      note: string,
      sort: number,
    } }) => {
      const uid = input.uid
      const tagRef = admin.firestore().collection("tags").doc(uid)
      await tagRef.update({
        name: input.name,
        note: input.note,
        sort: input.sort,
      })
      const tagDoc = await admin.firestore().doc(`tags/${uid}`).get();
      const tag = tagDoc.data();
      return tag;
    },
    deleteTag: async(_:null, {uid}: { uid: string }) => {
      await admin.firestore().collection("tags").doc(uid).delete();
      return uid
    },
  },
}
