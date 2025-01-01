// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Import the correct method for React 18
import App from "./App";
import StartRouting from "./HiringManager/routing/routingfile";

const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot
root.render(
  <React.StrictMode>
    <App />
    <StartRouting/>
  </React.StrictMode>
);
