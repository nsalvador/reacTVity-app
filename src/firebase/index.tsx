import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

firebase.initializeApp(config);

export const currentUser = firebase.auth().currentUser;

export const database = firebase.database();

export const signInWithPopup = () => {
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(googleAuthProvider);
};

export const onAuthStateChanged = (cb: (user: firebase.User | null) => any): firebase.Unsubscribe => {
  return firebase.auth().onAuthStateChanged(cb);
};

export const signOut = () => {
  firebase.auth().signOut();
};
