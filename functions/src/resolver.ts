import * as admin from "firebase-admin";
import {v4 as uuidv4} from 'uuid';

admin.initializeApp();

export const resolvers = {
  Query: {
    async tests() {
      const tests = await admin.firestore().collection("tests").get();
      return tests.docs.map((test) => test.data());
    },
  },
  Mutation: {
    addTest: async (_: null, {text}: { text: string }) => {
      const uid = uuidv4() // これは適当にご自身で作るなりライブラリ使うなりしてください
      await admin.firestore().collection("tests").doc(uid).set({
        uid: uid,
        text: text,
      });
      const testDoc = await admin.firestore().doc(`tests/${uid}`).get();
      const test = await testDoc.data();
      return test;
    },
  },
}

