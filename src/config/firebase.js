// import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//     apiKey: "AIzaSyCV3LH_XWKvYFrcxvd1aGOO_IgIt7efI9o",
//     authDomain: "expensetracker-877a8.firebaseapp.com",
//     projectId: "expensetracker-877a8",
//     storageBucket: "expensetracker-877a8.appspot.com",
//     messagingSenderId: "124425940279",
//     appId: "1:124425940279:web:dd0ef5b76b6c101eb9feb2",
//     measurementId: "G-5LC0P0KX1J"
//   };

  
//    export const  app = initializeApp(firebaseConfig);
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCV3LH_XWKvYFrcxvd1aGOO_IgIt7efI9o",
    authDomain: "expensetracker-877a8.firebaseapp.com",
    projectId: "expensetracker-877a8",
    storageBucket: "expensetracker-877a8.appspot.com",
    messagingSenderId: "124425940279",
    appId: "1:124425940279:web:dd0ef5b76b6c101eb9feb2",
    measurementId: "G-5LC0P0KX1J"
  };

  
   export const  app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);