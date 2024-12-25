import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, push } from 'firebase/database'; // Add push to the import

// Configuration for the first Firebase app
const firebaseConfig1 = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "https://jobseeker-application-default-rtdb.firebaseio.com", // First database URL
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Configuration for the second Firebase app
const firebaseConfig2 = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "https://job-portal-fdc41-default-rtdb.firebaseio.com", // Second database URL
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase apps
const app1 = initializeApp(firebaseConfig1, "app1");
const app2 = initializeApp(firebaseConfig2, "app2");

// Get references to the Firebase Realtime Databases
const db1 = getDatabase(app1);
const db2 = getDatabase(app2);

export { db1, db2, ref, get, push }; // Export both database instances along with ref, get, and push
