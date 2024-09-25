import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPm5Aj4grunFQCs1Sc9p6UJ4y7GrewFE0",
  authDomain: "storeweb-f59e5.firebaseapp.com",
  projectId: "storeweb-f59e5",
  storageBucket: "storeweb-f59e5.appspot.com",
  messagingSenderId: "270037162883",
  appId: "1:270037162883:web:8026d8e4ce1414b554b4b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
