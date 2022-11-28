import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/products?email=${user?.email}`;

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      //   , {
      //     headers: {
      //       authorization: `bearer ${localStorage.getItem("accessToken")}`,
      //     },
      //   }
      const data = await res.json();
      return data;
    },
  });

  const handleVerify = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(" successful.");
          refetch();
        }
      });
  };

  return (
    <div>
      <h3 className="text-3xl mb-5">My Orders</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Title</th>
              <th>Price</th>
              <th>Available</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products?.map((products, i) => (
                <tr key={products._id}>
                  <th>{i + 1}</th>
                  <th>
                    <div className="avatar">
                      <div className="w-32 rounded">
                        <img src={products.picture} alt="" />
                      </div>
                    </div>
                  </th>
                  <td>{products.phone_name}</td>
                  <td>{products.resale_price}</td>
                  <td>{products.available}</td>
                  <td>
                    {products?.verified !== "true" && (
                      <button
                        onClick={() => handleVerify(products._id)}
                        className="btn btn-xs btn-primary"
                      >
                        Verify
                      </button>
                    )}
                  </td>
                  {/* 
              <td>
                {booking.price && !booking.paid && (
                  <Link to={`/dashboard/payment/${booking._id}`}>
                    <button className="btn btn-primary btn-sm">Pay</button>
                  </Link>
                )}
                {booking.price && booking.paid && (
                  <span className="text-green-500">Paid</span>
                )}
              </td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
