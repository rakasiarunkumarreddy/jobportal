import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
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

const firebaseConfig2 = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "https://job-portal-fdc41-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase apps
const app1 = initializeApp(firebaseConfig1, "app1");
const app2 = initializeApp(firebaseConfig2, "app2");

// Firestore, Realtime Database, and Storage references
const db1 = getFirestore(app1);
const db2 = getDatabase(app2);
const storage = getStorage(app1);

// Export references for use in your components
export { app1, app2, db1, db2, ref, get, push, update, storage, doc, updateDoc, uploadBytes, getDownloadURL, child };
