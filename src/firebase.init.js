// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS64BLXczI4J2S0pJycT6BI_2yi8Sv3P0",
  authDomain: "motion-view-task.firebaseapp.com",
  projectId: "motion-view-task",
  storageBucket: "motion-view-task.appspot.com",
  messagingSenderId: "458995214450",
  appId: "1:458995214450:web:140c1746afc9f959a6faeb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
