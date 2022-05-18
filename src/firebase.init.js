// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_v-rK6c8LIZpdwJruyPZNDN7WnavaOpE",
    authDomain: "todo-list-e9d06.firebaseapp.com",
    projectId: "todo-list-e9d06",
    storageBucket: "todo-list-e9d06.appspot.com",
    messagingSenderId: "399307305958",
    appId: "1:399307305958:web:055ab9d9805f966c4b1c27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;   