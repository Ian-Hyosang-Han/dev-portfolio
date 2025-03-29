import React, { useEffect } from "react";
import "../../styles/ui/cursor.css";

const Cursor = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/scripts/cursor.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="cursor">
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="circle"></div>
      ))}
    </div>
  );
};

export default Cursor;