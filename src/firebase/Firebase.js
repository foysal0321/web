import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCryNsEo-XEE7ldYxz2CEJlzj2YktGp2kg",
  authDomain: "react-assignment-1-17246.firebaseapp.com",
  projectId: "react-assignment-1-17246",
  storageBucket: "react-assignment-1-17246.appspot.com",
  messagingSenderId: "825078543397",
  appId: "1:825078543397:web:f7aeff6246212bb410bbcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;