import React from "react";

function Footer() {
  return <div>Footer</div>;
}

export default Footer;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAetn2-1HgmQA_S7KOyr5RCe6UxL3vQdkg",
  authDomain: "ch-ecommerce-fe68f.firebaseapp.com",
  projectId: "ch-ecommerce-fe68f",
  storageBucket: "ch-ecommerce-fe68f.appspot.com",
  messagingSenderId: "26922881647",
  appId: "1:26922881647:web:16acec58751047b53b339a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
