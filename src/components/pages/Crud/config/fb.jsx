import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDsI1_6iF-KYq1KH6cArXVtJunEfSEf92A",
  authDomain: "crud-firebase-react-83e3c.firebaseapp.com",
  databaseURL: "https://crud-firebase-react-83e3c-default-rtdb.firebaseio.com",
  projectId: "crud-firebase-react-83e3c",
  storageBucket: "crud-firebase-react-83e3c.appspot.com",
  messagingSenderId: "913357406494",
  appId: "1:913357406494:web:6b628bad9baee7d66e090f"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);

