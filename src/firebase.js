import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBjR_lQ39yH5cv5byzZR9i6qk5ASHRKNgU",
    authDomain: "social-media-app-1e19c.firebaseapp.com",
    projectId: "social-media-app-1e19c",
    storageBucket: "social-media-app-1e19c.appspot.com",
    messagingSenderId: "886253948528",
    appId: "1:886253948528:web:5f18a38451d32173cdeeb5",
    measurementId: "G-F70ZD8LJ71"
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app);
  const db = getFirestore(app);
  const provider = new GoogleAuthProvider();

  export {auth, provider}
  export default db;