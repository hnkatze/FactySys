import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-hXjC7zB1rDoLpoytvHPmYCnQLNHIZ3U",
  authDomain: "bosu504.firebaseapp.com",
  projectId: "bosu504",
  storageBucket: "bosu504.appspot.com",
  messagingSenderId: "418636387463",
  appId: "1:418636387463:web:3d9a927408a710e3f85422"
};
 const app = initializeApp(firebaseConfig);

 const db = getFirestore(app);
export{db};

