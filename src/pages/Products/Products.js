import React from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const category = useLoaderData();
  console.log(category);
  return <div></div>;
};

export default Products;
