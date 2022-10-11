import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCI7VNeouMEQc2mBxr1JLIMMSmaWArW8C8",
  authDomain: "react-project-c5aa0.firebaseapp.com",
  projectId: "react-project-c5aa0",
  storageBucket: "react-project-c5aa0.appspot.com",
  messagingSenderId: "482950565129",
  appId: "1:482950565129:web:2d3933dad71f0ee23dd7d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
