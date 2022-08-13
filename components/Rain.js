import React, { useEffect, useState, useRef } from "react";

const Rain = () => {
  const [rainCount] = useState(80);
  const [animationTiming] = useState(7);
  let header = useRef(null);

  useEffect(() => {
    for (let index = 0; index < rainCount; index++) {
      let i = document.createElement("i");

      //calculation
      let delay = Math.random() * -20;
      let posX = Math.floor(Math.random() * window.innerWidth);
     
      //adding style
      i.style.left = posX + `px`;
      i.style.animationDelay = delay + `s`;
      i.style.animationDirection = animationTiming + `s`;

      header.current?.appendChild(i);
    }

    // console.log("hello");
  }, []);

  return ( 
  <div ref={header}>
    
    </div>
)
};

export default Rain;
