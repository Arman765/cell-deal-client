import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <>
      <div className="bg-purple-100 rounded-2xl p-8">
        <h1 className="text-info errror">404 Error Page</h1>

        <section className="error-container">
          <span>4</span>
          <span>
            <span className="screen-reader-text">0</span>
          </span>
          <span>4</span>
        </section>
        <div className="link-container">
          <Link className="btn btn-outline-info fs-3 fw-bold" to="/">
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
