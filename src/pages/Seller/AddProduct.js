import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import Loading from "../Shared/Loading/Loading";

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imagebb_key;

  const navigate = useNavigate();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["categoriesname"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categoriesname");
      const data = await res.json();
      return data;
    },
  });

  const handleAddProduct = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const product = {
            phone_name: data.phone,
            seller_name: user?.name,
            yearsUse: `${data.used} years`,
            email: user?.email,
            category: data.specialty,
            picture: imgData.data.url,
            location: data.location,
            original_price: data.oprice,
            resale_price: data.rprice,
            verified: "",
            available: "true",
          };

          // save doctor information to the database
          fetch(`http://localhost:5000/products`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              //   navigate("/dashboard/managedoctors");
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-96 p-7">
      <h2 className="text-4xl">Add A Product</h2>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Category</span>
          </label>
          <select
            {...register("specialty")}
            className="select input-bordered w-full max-w-xs"
          >
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Phone Name</span>
          </label>
          <input
            type="text"
            {...register("phone", {
              required: "Phone name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Original Price</span>
          </label>
          <input
            type="text"
            {...register("oprice", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.oprice && (
            <p className="text-red-500">{errors.oprice.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Resale Price</span>
          </label>
          <input
            type="text"
            {...register("rprice", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.rprice && (
            <p className="text-red-500">{errors.rprice.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Years of Used</span>
          </label>
          <input
            type="text"
            {...register("used", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.used && <p className="text-red-500">{errors.used.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register("location", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Picture</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>
        <input
          className="btn btn-accent w-full mt-4"
          value="Add Product"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
