import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDnI8pw2lgs2yywJvj4dv0I-Q5RFhi6_yg",
  authDomain: "goal-f2516.firebaseapp.com",
  projectId: "goal-f2516",
  storageBucket: "goal-f2516.appspot.com",
  messagingSenderId: "1031618243202",
  appId: "1:1031618243202:web:e5c15778ffea3ecc89a29b",
  measurementId: "G-567L54K03T"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app);