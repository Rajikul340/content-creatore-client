import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" border md:w-1/2  mx-auto md:mt-5 mt-2">
      <h1 className="lg:text-3xl text-2xl font-bold text-center italic">
        login
      </h1>

       <div className=" md:w-8/12 mx-auto md:mt-4">
       <form className="  flex flex-col p-4">
        <label>Email</label>
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
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
        <p className="text-red-500">{}</p>

        <button type="submit" className="btn btn-primary mt-4 max-w-xs ">
          login
        </button>
        <p>
          create a new account{" "}
          <Link className="text-[#2733FA]" to="/register">
            register
          </Link>
        </p>
      </form>
       </div>
    </div>
  );
};

export default Login;
