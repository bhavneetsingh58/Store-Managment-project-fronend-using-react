import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAR_2LJV8G9wRFHikuYqTaulox95UIUOv8",
    authDomain: "storeadminproject.firebaseapp.com",
    projectId: "storeadminproject",
    storageBucket: "storeadminproject.appspot.com",
    messagingSenderId: "835033250537",
    appId: "1:835033250537:web:7b6397e7f003837e878e78"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
