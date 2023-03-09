import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 

  const handleSubmit = (e) => {
    e.preventDefault();
 
  };

  return (
    <div className="border md:mt-5 mt-2 md:w-1/2 mx-auto">
      <h1 className="md:text-3xl text-2xl font-bold italic text-center">
        Register
      </h1>

      <div>
        <form
          onSubmit={handleSubmit}
          className=" md:w-7/12 md:mt-4 mt-2 mx-auto flex flex-col p-4"
        >
          <label>Full Name</label>
          <input
            type="text"
            name="Name"
            placeholder="Full Name"
            className="input input-bordered w-full max-w-xs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-500">error</p>

          <button type="submit" className="btn btn-primary mt-4 w-11/12">
            Register
          </button>
          <p>
            already have an account please{" "}
            <Link className="text-[#2733FA]" to="/login">
              Login
            </Link>
          </p>
        </form>
        <div className="md:w-6/12 mx-auto md:mb-3 ">
          <button className=" border flex items-center justify-center gap-3 w-full mt-4 p-3 rounded-btn">
            <FcGoogle /> Google Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
