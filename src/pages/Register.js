import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="border md:mt-5 mt-2 md:w-1/2 mx-auto">
      <h1 className="md:text-3xl text-2xl font-bold italic text-center">Register</h1>

      <div>
        <form className=" md:w-8/12 md:mt-4 mt-2 mx-auto flex flex-col p-4">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input input-bordered w-full max-w-xs"
          />
          <label>Email</label>
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />
          <label>image</label>
          <input
            type="file"
            name="photo"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
          />
          <label>Password</label>
          <input
            required
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered w-full max-w-xs"
          />
          <p className="text-red-500">error</p>

          <button type="submit" className="btn btn-primary mt-4">
            Register
          </button>
          <p>
            already have an account please{" "}
            <Link className="text-[#2733FA]" to="/login">
              Login
            </Link>
          </p>
        </form>
         <div className="md:w-8/12 mx-auto md:mb-3">
         <button className=" border flex items-center justify-center gap-3 w-full mt-4 p-3 rounded-btn">
          <FcGoogle /> Google Sign In
        </button>
         </div>
      </div>
    </div>
  );
};

export default Register;
