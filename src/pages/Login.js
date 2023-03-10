import React, {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SmallSpiner } from "../Component/smallSpiner";
import { signInUser } from "../redux/action/actionCreators";

const Login = () => {
      const [email, setEmail] = useState("")   
      const [password, setPassword] = useState("");
      const [success, setSuccess] = useState(false);
      const [error, setError] = useState("")
      const dispatch = useDispatch();
      const navigate = useNavigate()
      const isLoading = useSelector((state)=>state.auth.isLoading);  

 

  const handleSubmitForm = (e) => {
    e.preventDefault();

     dispatch(signInUser(email, password,setSuccess, setError))
     
  };

  useEffect(()=>{
  
    if(success){
     navigate("/")
    
    }
 },[success, navigate])




  return (
    <div className=" border md:w-1/2  mx-auto md:mt-5 mt-2">
      <h1 className="lg:text-3xl text-2xl font-bold text-center italic">
        login
      </h1>

       <div className=" md:w-8/12 mx-auto md:mt-4">
       <form className="  flex flex-col p-4" onSubmit={handleSubmitForm}>
        <label>Email</label>
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          required
          type="password"
          name="password"
          placeholder="password"
          className="input input-bordered w-full max-w-xs"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <p className="text-red-500">{error}</p>

        <button type="submit" className="btn btn-primary mt-4 max-w-xs ">
            {
              isLoading ? <SmallSpiner/> : "Login"
            }
        </button>
        <p>
          create a new account{" "}
          <Link className="text-[#2733FA]" to="register">
            register
          </Link>
        </p>
      </form>
       </div>
    </div>
  );
};

export default Login;
