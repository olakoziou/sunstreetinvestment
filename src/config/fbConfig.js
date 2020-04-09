import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCIaov8zNWeAtzLQ5UlLBnW65jNgYDmdnM',
  authDomain: 'sunstreet-dashboard.firebaseapp.com',
  databaseURL: 'https://sunstreet-dashboard.firebaseio.com',
  projectId: 'sunstreet-dashboard',
  storageBucket: 'sunstreet-dashboard.appspot.com',
  messagingSenderId: '405446973566',
  appId: '1:405446973566:web:0cc775bc345dcbd8c3602f'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
