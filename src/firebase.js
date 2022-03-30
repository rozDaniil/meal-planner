import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    onSnapshot,
    setDoc,
    updateDoc,
    doc,
    serverTimestamp,
} from "firebase/firestore";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD0r1wQtl3wQ9ULc06prOqR3RtzxCznd7A",
    authDomain: "menu-app-99660.firebaseapp.com",
    databaseURL: "https://menu-app-99660-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "menu-app-99660",
    storageBucket: "menu-app-99660.appspot.com",
    messagingSenderId: "820999916352",
    appId: "1:820999916352:web:bcb626ac94a2938b80c8a5",
    measurementId: "G-K6W2W19ZNJ",
};


export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);