import React from "react";
import blob from "../../images/blob.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section>
      <div>
        <h1>Welcome Back!</h1>
        <form>
          <div>
            <label htmlFor="email">Username</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Username</label>
            <input type="password" name="password" />
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
