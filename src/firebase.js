import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBY07IIhllWq3nB7kcH0h0QNjry03KnaT8",
    authDomain: "slack-a2634.firebaseapp.com",
    databaseURL: "https://slack-a2634.firebaseio.com",
    projectId: "slack-a2634",
    storageBucket: "slack-a2634.appspot.com",
    messagingSenderId: "415771172846",
    appId: "1:415771172846:web:612d2949c5925e031c78ff"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db