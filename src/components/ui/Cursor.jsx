import React, { useEffect, useRef } from "react";
// Importing CSS style
import "../../styles/ui/cursor.css";

const Cursor = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([]);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    circlesRef.current.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = "white";
    });

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      if (cursorRef.current) {
        cursorRef.current.style.top = y + "px";
        cursorRef.current.style.left = x + "px";
      }

      circlesRef.current.forEach((circle, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.scale = (circlesRef.current.length - index) / circlesRef.current.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor" ref={cursorRef}>
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => (circlesRef.current[index] = el)}
        />
      ))}
    </div>
  );
}

export default Cursor;