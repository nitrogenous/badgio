import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/storage';

const { REACT_APP_FIREBASE_CONF } = process.env;

// Initialize Firebase
firebase.initializeApp(JSON.parse(REACT_APP_FIREBASE_CONF));
firebase.analytics();

const storage = firebase.storage();

export { storage, firebase as default };
