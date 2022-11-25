import React from "react";
import img from "../../../assets/banner/banner.png";

const Banner = () => {
  return (
    <section>
      <div className="hero  bg-purple-100 rounded-xl mt-10 mb-16 p-3">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img}
            className="hidden md:block w-1/2 rounded-lg -mb-32"
            alt=""
          />
          <div className="w-1/2">
            <h1 className="text-4xl font-bold">Cheap &</h1>
            <br></br>
            <h1 className="text-4xl font-bold">Authentic Products!</h1>
            <br></br>
            <p className="py-3">
              Lets's not worry about the authenticity or being decieved. Because
              we are so trusted that your trust will trust us too.Thank you for
              stopping by.
            </p>
            <button className="btn btn-primary      first-letter rounded-3xl ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
