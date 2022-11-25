import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import AllProducts from "./AllProducts";

const Products = () => {
  const category = useLoaderData();
  const { _id, name, picture, banner, products, description } = category;
  const [item, setItem] = useState(null);
  return (
    <>
      <div className="hero " style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{name}</h1>
            <p className="mb-5">{description}</p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
      <div>
        <p className="mt-10 mb-4 text-5xl font-bold">{name}/Products</p>
        <div className="divider mb-16"></div>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {products.map((product) => (
          <AllProducts
            key={product.product_id}
            product={product}
            setItem={setItem}
          ></AllProducts>
        ))}
      </div>
      {item && <BookingModal item={item}></BookingModal>}
    </>
  );
};

export default Products;
