import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMmtc5-PexZU51m172hw5WjTPVDw4GCew",
  authDomain: "attendance-app-a6412.firebaseapp.com",
  projectId: "attendance-app-a6412",
  storageBucket: "attendance-app-a6412.appspot.com",
  messagingSenderId: "428262751047",
  appId: "1:428262751047:web:7a1fd88f055311ca332a62"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {
  app,
  auth,
}
