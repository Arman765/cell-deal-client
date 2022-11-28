import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [option, setOption] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    if (option === "customer") {
      createUser(data.email, data.password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          toast("Succesfully Customer Account Created!");
          const userInfo = {
            displayName: data.name,
          };
          updateUserProfile(userInfo)
            .then(() => {
              saveUser(data.name, data.email);
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => {
          console.log(error);
          setSignUPError(error.message);
        });
    } else {
      createUser(data.email, data.password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          toast("Succesfully Seller Account Created!");
          const userInfo = {
            displayName: data.name,
          };
          updateUserProfile(userInfo)
            .then(() => {
              saveSeller(data.name, data.email);
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => {
          console.log(error);
          setSignUPError(error.message);
        });
    }
  };

  const saveUser = (name, email) => {
    const user = { name, email };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  const saveSeller = (name, email) => {
    const user = { name, email, role: "seller" };

    fetch("http://localhost:5000/sellers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  const handleOption = (event) => {
    setOption(event.target.value);
  };

  return (
    <div className="h-[800px] flex justify-center items-center bg-purple-100 rounded-2xl mx-8 my-8">
      <div className="w-96 p-7 bg-white rounded-2xl">
        <h2 className="text-xl text-start  font-bold">
          Sign Up,<br></br>
        </h2>

        <h3 className="text-xl text-start mb-4 font-bold">
          You are good to go!
        </h3>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <select
            onChange={handleOption}
            name="slot"
            className="select select-bordered w-full mt-4"
          >
            <option selected value="customer">
              Sign Up As Customer
            </option>
            <option value="seller">Sign Up As Seller</option>
          </select>

          <input
            className="btn btn-accent w-full mt-4"
            value="Sign Up"
            type="submit"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p>
          Already have an account{" "}
          <Link className="text-secondary" to="/login">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;
