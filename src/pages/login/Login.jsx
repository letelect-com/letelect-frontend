import React from "react";
import blob from "../../images/blob.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section
      className="fixed h-screen w-screen overflow-hidden"
      style={{
        background: `url(${blob})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="h-full flex flex-col justify-center w-[30%] m-auto ">
        <h1 className="font-script italic font-bold text-5xl text-white text-center my-2">
          Welcome Back!
        </h1>
        <form>
          <div className="flex flex-col w-full ">
            <label htmlFor="email" className="font-bold text-white mb-1">
              Email
            </label>
            <input
              className="w-full pl-3 py-2 outline-none border border-primaryLight mb-2 rounded-md "
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="password" className="font-bold text-white mb-1">
              Password
            </label>
            <input
              className="w-full pl-3 py-2 outline-none border border-primaryLight mb-2 rounded"
              type="password"
              name="password"
            />
          </div>
          <div className="flex w-full">
            <input
              className="w-full bg-primary text-white font-bold py-3 my-4 rounded"
              type="submit"
              value="Login"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
