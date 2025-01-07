import React, { useEffect } from "react";
import "./Alert.css";

const Alert = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Auto-close the alert after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="alert-container">
      <div className="alert-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Alert;
