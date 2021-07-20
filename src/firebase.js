import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCtreAxuvg137_23yNCLx3hVsoMaemfUCc',
    authDomain: 'whatsapp-clone-4c0fa.firebaseapp.com',
    projectId: 'whatsapp-clone-4c0fa',
    storageBucket: 'whatsapp-clone-4c0fa.appspot.com',
    messagingSenderId: '747756187216',
    appId: '1:747756187216:web:fd6c1eb1a899f5ba61ab55',
    measurementId: 'G-CH1W85PW68',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
