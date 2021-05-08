import firebase from 'firebase/app';
import config from './config';
import 'firebase/analytics';
import 'firebase/storage';

// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

const storage = firebase.storage();

export { storage, firebase as default };
