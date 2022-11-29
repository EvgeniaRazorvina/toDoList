import firebase from 'firebase';
firebase.initializeApp({
    apiKey: "AIzaSyCL3251h5FuyYrtRG1VTzgNwlBeOjR1SvE",
    authDomain: "todo-list-project-razorvina.firebaseapp.com",
    databaseURL: "https://todo-list-project-razorvina-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo-list-project-razorvina",
    storageBucket: "todo-list-project-razorvina.appspot.com",
    messagingSenderId: "1053296310870",
    appId: "1:1053296310870:web:c8b48ec66c3326ff1d99f7"
});


// Initialize Firebase
const db = firebase.firestore();

export default db;