import React from "react";
import { GoVerified } from "react-icons/go";

const AllProducts = ({ product, setItem }) => {
  const {
    picture,
    name,
    resale_price,
    original_price,
    yearsUse,
    seller_name,
    postTime,
    location,
    phone_name,
    verified,
  } = product;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-8 pt-8">
        <img src={picture} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <div className="text-start">
          <h2 className="card-title font-bold mb-4">{phone_name}</h2>
          <p>
            <span>Original Price : $</span>
            {original_price}
          </p>
          <p>Resale Price : ${resale_price}</p>
          <p>Used (Years) : {yearsUse}</p>
          <div className="flex items-center ">
            {verified === "true" ? <GoVerified></GoVerified> : ""}
            <p>Seller Name : {seller_name}</p>
          </div>

          <p>Seller Location : {location}</p>
          <p>Posted At :{postTime}</p>
        </div>
        <div className="card-actions">
          <label
            htmlFor="booking-modal"
            className="btn btn-primary"
            onClick={() => setItem(product)}
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
