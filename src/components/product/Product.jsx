"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import numberBrm from "number-brm";

const Product = ({ data, title }) => {
  const cardItems = data?.products?.map((item) => (
    <div key={item?.id} className="product">
      <div className="product__img">
        {item?.images.length <= 1 ? (
          <img src={item?.images[0]} alt={item?.title} className="img" />
        ) : (
          <>
            <img
              src={item?.images[0]}
              alt={item?.title}
              className="product__img-1 img"
            />
            <img
              src={item?.images[1]}
              alt={item?.title}
              className="product__img-2 img"
            />
          </>
        )}
        <div className="top">TOP</div>
      </div>
      <p title={item?.description} className="product__desc">
        {item?.description}
      </p>
      <div className="product__rating">
        <FaStar className="star" />
        <span>{item?.rating}</span>
        <span>{item?.stock} ta xarid</span>
      </div>
      <h4 className="product__price">
        {(item?.price * 12500).brm("int", 1)} UZS
      </h4>
    </div>
  ));
  return (
    <div className="container">
      <h2 style={{ marginTop: "50px" }}>{title}</h2>
      <div className="product__wrapper">{cardItems}</div>
    </div>
  );
};

export default Product;
