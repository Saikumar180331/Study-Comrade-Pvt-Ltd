import React, { useState } from "react";

function About() {
  const images = ["&#x1F4F7;", "&#x1F3AC;", "&#x1F39E;"];
  const [index, setIndex] = useState(0);

  return (
    <div>
      <h2>About Page: Carousel</h2>
      <p style={{ fontSize: "2rem" }}>{images[index]}</p>
      <button onClick={() => setIndex((index - 1 + images.length) % images.length)}>Prev</button>
      <button onClick={() => setIndex((index + 1) % images.length)}>Next</button>
    </div>
  );
}

export default About;
