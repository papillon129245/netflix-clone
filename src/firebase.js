
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDr-35O4zN_vPTZEJByzeafi4w0Ed49k0A",
    authDomain: "netflix-build-fda3f.firebaseapp.com",
    projectId: "netflix-build-fda3f",
    storageBucket: "netflix-build-fda3f.appspot.com",
    messagingSenderId: "563877218945",
    appId: "1:563877218945:web:8ed790f22d13d166c91b80"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;