import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { _id, name, picture, description } = category;
  return (
    <div>
      <div className="flex justify-end -mb-20">
        <img src={picture} alt="mobiles" />
      </div>
      <div className="card w-96  shadow-2xl">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-start">
            <Link to={`/category/${_id}`}>
              <button className="btn btn-primary">See More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
