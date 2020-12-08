import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0N9kYmj4aKCLsZ_93V16Yl6IYG9GE3g0",
    authDomain: "challenge-5ca5e.firebaseapp.com",
    databaseURL: "https://challenge-5ca5e.firebaseio.com",
    projectId: "challenge-5ca5e",
    storageBucket: "challenge-5ca5e.appspot.com",
    messagingSenderId: "47294981675",
    appId: "1:47294981675:web:c662d639a842af86016c6e",
    measurementId: "G-NEFYS3N56Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };