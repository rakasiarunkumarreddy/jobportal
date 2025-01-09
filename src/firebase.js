import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, push, update, child } from "firebase/database";
import { getStorage, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig1 = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "https://jobseeker-application-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase app
const app1 = initializeApp(firebaseConfig1, "app1");

// Realtime Database and Storage references
const db1 = getDatabase(app1);
const storage = getStorage(app1);

// Export references for use in your components
export { app1, db1, ref, get, push, update, storage, uploadBytes, getDownloadURL, child };
