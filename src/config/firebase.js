// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-2HNquhg-EbRGQqAPdfizcFeMOtD9yxQ",
  authDomain: "cousera-management.firebaseapp.com",
  projectId: "cousera-management",
  storageBucket: "cousera-management.appspot.com",
  messagingSenderId: "993217390860",
  appId: "1:993217390860:web:33f3c0e291fb85c7360129",
  measurementId: "G-9KKFHPJ3Q1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
