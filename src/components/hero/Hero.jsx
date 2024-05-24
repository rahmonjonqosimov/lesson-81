import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div style={{ padding: "0" }} className="container">
        <div className="hero__contenet">
          <h3>POSTED ON STARTUP</h3>
          <h2>Step-by-step guide to choosing great font pairs</h2>
          <p>
            By <span>James West</span> | May 23, 2022{" "}
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.{" "}
          </p>
          <button>Read More {">"}</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
