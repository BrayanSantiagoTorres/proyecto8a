import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBXUet4ILdy8UMVycPCs_6RvQ_poPa29P4",
    authDomain: "prorest-d101c.firebaseapp.com",
    projectId: "prorest-d101c",
    storageBucket: "prorest-d101c.appspot.com",
    messagingSenderId: "649821100624",
    appId: "1:649821100624:web:99647b7634e3533f294f55"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)