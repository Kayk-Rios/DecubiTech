
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseUrl: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId:  import.meta.env.VITE_PROJECT_ID,
  storageBucket:  import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId:  import.meta.env.VITE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID ,
};


const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)
export const auth = getAuth(app);