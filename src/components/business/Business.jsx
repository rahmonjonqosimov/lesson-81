import React from "react";
import img from "@/assets/images/blog.png";
import Image from "next/image";

const Business = () => {
  const item = [
    "Top 6 free website mockup tools 2022",
    "Step-by-step guide to choosing great font pairs",
    "Ten free foogle fonts that you should use",
    "What did I learn from doing 50+ design sprints?",
  ];
  const card = item?.map((el, inx) => (
    <div key={inx} className="business__item">
      <Image alt="image" src={img} width={447} height={312} />
      <div className="item__text">
        <h3>Business</h3>
        <h2>{el}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec.
        </p>
      </div>
    </div>
  ));
  return (
    <div className="business">
      <div className="business__hero">
        <div className="container">
          <div className="business__hero__item">
            <h1>Business</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <h3>Blog {">"} Business</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <input type="text" placeholder="Searching ..." required />
        <div className="business__wrapper">{card}</div>
      </div>
    </div>
  );
};

export default Business;
