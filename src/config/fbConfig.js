import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyASq28Cv7Luk48KMJtX5D6MePjOwzVmD9s",
    authDomain: "crioni-marioplan.firebaseapp.com",
    projectId: "crioni-marioplan",
    storageBucket: "crioni-marioplan.appspot.com",
    messagingSenderId: "988161172491",
    appId: "1:988161172491:web:59d6b1f82263eb58bc930e",
    measurementId: "G-98XKKP7QTN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots:true});



export default firebase;

