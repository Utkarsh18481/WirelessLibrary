import  firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyBTbVFaiOsqZcAec7Vlo32az8H78ONSRpY",
  authDomain: "wireleibrary-41ce2.firebaseapp.com",
  projectId: "wireleibrary-41ce2",
  storageBucket: "wireleibrary-41ce2.appspot.com",
  messagingSenderId: "125815919614",
  appId: "1:125815919614:web:1fc9c1ee4f3f390037a6af",
  measurementId: "G-LPKY60HSL0"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();