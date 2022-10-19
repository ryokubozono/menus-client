import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { destroyCookie, setCookie } from 'nookies'

const config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
};

const app = initializeApp(config);

export const auth = getAuth(app);
export const storage = getStorage(app);

export const Login = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const options = {
        maxAage: 60 * 60,
        secure: true,
        path: '/',
      }
      user.getIdToken().then(function(idToken) {
        setCookie(null, 'session', idToken, options)
      })
    })
    .catch(function (error: any) {
      console.log(error);
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

export const firebaseUser = () => {
  return auth.currentUser;
};

// Logout
export const Logout = () => {
  auth.signOut().then(() => {
    destroyCookie(null, 'session')
    window.location.reload();
  });
};
