
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC19NKOB5VBnkhvJ_qq129DIUmbPTiN-Eg",
  authDomain: "easy-8ef79.firebaseapp.com",
  projectId: "easy-8ef79",
  storageBucket: "easy-8ef79.appspot.com",
  messagingSenderId: "895574320681",
  appId: "1:895574320681:web:9247eb731956b57b469e38"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}