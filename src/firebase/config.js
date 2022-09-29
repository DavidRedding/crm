import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBfb8ej2E9mbNlEmwEsyQgTwKoemriWmBI',
  authDomain: 'thecrmsite.firebaseapp.com',
  projectId: 'thecrmsite',
  storageBucket: 'thecrmsite.appspot.com',
  messagingSenderId: '188849178290',
  appId: '1:188849178290:web:febfc4dcccbb531b016bab',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const timestamp = firebase.firestore.Timestamp;

export { db, auth, storage, timestamp };
