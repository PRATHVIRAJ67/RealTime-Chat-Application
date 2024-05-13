import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-recent-c3513.firebaseapp.com",
  projectId: "chat-app-recent-c3513",
  storageBucket: "chat-app-recent-c3513.appspot.com",
  messagingSenderId: "11953890819",
  appId: "1:11953890819:web:f04a59186f694d08f69036"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()