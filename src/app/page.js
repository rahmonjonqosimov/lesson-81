import Category from "@/components/category/Category";
import Hero from "@/components/hero/Hero";
import Product from "@/components/product/Product";
import React from "react";

async function getData() {
  const res = await fetch(`https://dummyjson.com/products?limit=6&skip=6`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home = async () => {
  const data = await getData();
  return (
    <>
      <Hero />
      <Product title={"Products"} data={data} />
      <Category />
    </>
  );
};

export default Home;
