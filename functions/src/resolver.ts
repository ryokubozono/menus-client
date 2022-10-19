import * as admin from "firebase-admin";
import {v4 as uuidv4} from 'uuid';

admin.initializeApp();

export const resolvers = {
  Query: {
    async tests() {
      const tests = await admin.firestore().collection("tests").get();
      return tests.docs.map((test) => test.data());
    },
    test: async ( _:null, {uid}: { uid: string } ) => {
      const testDoc = await admin.firestore().doc(`tests/${uid}`).get();
      const test = testDoc.data();
      return test;
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
    item: async ( _:null, {uid}: { uid: string } ) => {
      const itemDoc = await admin.firestore().doc(`items/${uid}`).get();
      const item = itemDoc.data();
      return item;
    },
    itemsByShopId: async ( _:null, {shopUid}: {shopUid: string} ) => {
      const items = await admin.firestore().collection("items")
      .where("shop_uid", "==", shopUid)
      .get();
      return items.docs.map((item) => item.data());
    },
    itemsByTagId: async ( _:null, {tagUid}: {tagUid: string} ) => {
      const items = await admin.firestore().collection("items")
      .where("tag_uid", "==", tagUid)
      .get();
      return items.docs.map((item) => item.data());
    },
    image: async ( _:null, {uid}: { uid: string } ) => {
      const imageDoc = await admin.firestore().doc(`images/${uid}`).get();
      const image = imageDoc.data();
      return image;
    },
  },
  Mutation: {
    createTest: async (_: null, {input}: { input:{text: string }}) => {
      const uid = uuidv4()
      await admin.firestore().collection("tests").doc(uid).set({
        uid: uid,
        text: input.text,
      });
      const testDoc = await admin.firestore().doc(`tests/${uid}`).get();
      const test = await testDoc.data();
      return test;
    },
    updateTest: async(_: null, {input}: { input: {
      uid: string,
      text: string,
    } }) => {
      const uid = input.uid
      const testRef = admin.firestore().collection("tests").doc(uid)
      await testRef.update({
        text: input.text,
      })
      const testDoc = await admin.firestore().doc(`tests/${uid}`).get();
      const test = testDoc.data();
      return test;
    },
    deleteTest: async(_:null, {uid}: { uid: string }) => {
      await admin.firestore().collection("tests").doc(uid).delete();
      return uid
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
    createItem: async (
      _: null,
      {input}: { input: {
        shop_uid: string,
        tag_uid: string,
        sort: number,
        name: string,
        price: number,
        is_visible: boolean,
        is_sold: boolean,
        image_path: string,
      } },
    ) => {
      const uid = uuidv4()
      await admin.firestore().collection("items").doc(uid).set({
        uid: uid,
        shop_uid: input.shop_uid,
        tag_uid: input.tag_uid,
        sort: input.sort,
        name: input.name,
        price: input.price,
        is_visible: input.is_visible,
        is_sold: input.is_sold,
        image_path: input.image_path,
      });
      const itemDoc = await admin.firestore().doc(`items/${uid}`).get();
      const item = await itemDoc.data();
      return item;
    },
    updateItem: async(_: null, {input}: { input: {
      uid: string,
      tag_uid: string,
      sort: number,
      name: string,
      price: number,
      is_visible: boolean,
      is_sold: boolean,
      image_path: string,
    } }) => {
      const uid = input.uid
      const itemRef = admin.firestore().collection("items").doc(uid)
      await itemRef.update({
        tag_uid: input.tag_uid,
        sort: input.sort,
        name: input.name,
        price: input.price,
        is_visible: input.is_visible,
        is_sold: input.is_sold,
        image_path: input.image_path,
      })
      const itemDoc = await admin.firestore().doc(`items/${uid}`).get();
      const item = itemDoc.data();
      return item;
    },
    deleteItem: async(_:null, {uid}: { uid: string }) => {
      await admin.firestore().collection("items").doc(uid).delete();
      return uid
    },
    createImage: async (
      _: null,
      {input}: { input: {
        item_uid: string,
        image_path: string,
      } },
    ) => {
      const uid = input.item_uid
      await admin.firestore().collection("images").doc(uid).set({
        item_uid: uid,
        image_path: input.image_path,
      });
      const imageDoc = await admin.firestore().doc(`images/${uid}`).get();
      const image = await imageDoc.data();
      return image;
    },
    deleteImage: async(_:null, {uid}: { uid: string }) => {
      await admin.firestore().collection("images").doc(uid).delete();
      return uid
    },
  },
}
