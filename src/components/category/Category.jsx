import React from "react";
import img1 from "@/assets/images/category-1.svg";
import img2 from "@/assets/images/category-2.svg";
import img3 from "@/assets/images/category-3.svg";
import img4 from "@/assets/images/category-4.svg";
import Image from "next/image";

const Category = () => {
  const item = [
    {
      id: 1,
      title: "Business",
      url: img1,
    },
    {
      id: 2,
      title: "Startup",
      url: img2,
    },
    {
      id: 3,
      title: "Economy",
      url: img3,
    },
    {
      id: 4,
      title: "Technology",
      url: img4,
    },
  ];
  const card = item?.map((el) => (
    <div className="category__item" key={el.id}>
      <Image
        className="category__img"
        alt={el.title}
        src={el.url}
        width={25}
        height={25}
      />
      <h4>{el.title}</h4>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
    </div>
  ));
  return (
    <>
      <h2 className="category__title">Choose A Catagory</h2>
      <div className="container category__wrapper">{card}</div>
    </>
  );
};

export default Category;
