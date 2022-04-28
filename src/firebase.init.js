// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvcpuHjPMX_51RWKQd-qQdL8pyabvwHiU",
  authDomain: "genius-car-services-45782.firebaseapp.com",
  projectId: "genius-car-services-45782",
  storageBucket: "genius-car-services-45782.appspot.com",
  messagingSenderId: "218992632104",
  appId: "1:218992632104:web:f51e7921f437732f4cb01d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
