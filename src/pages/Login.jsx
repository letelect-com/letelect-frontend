import React, { useState, useContext, useRef, useEffect } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { BiUserCircle, BiLock } from "react-icons/bi";
import "./../index.css";
import axios from "./../api/axios";
import AuthContext from "../context/AuthProvider";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { setAuth, setExpiry } = useContext(AuthContext);
  const LOGIN_URL = "/login/";
  const [clickLogin, setClickLogin] = useState(false);

  useEffect(() => {
    setError("");
    setClickLogin(false);
  }, [username, password]);

  const handleSubmit = async (e) => {
    setClickLogin(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response?.data);
      const token = await response?.data?.token;
      localStorage.setItem("token", token);
      if (localStorage.token) {
        setAuth(true);
        setSuccess(`Login Successful`);
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 2000);
      }
    } catch (err) {
      setClickLogin(false);
      console.log(err.message);
      setError(err.message);
    }
  };
  return (
    <Parent>
      <Container>
        <h1>Welcome Back!</h1>
        <Form onSubmit={handleSubmit}>
          <FormData>
            <label htmlFor="username">Email</label>
            <FormRow>
              <BiUserCircle size={30} />
              <input
                type="email"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </FormRow>
          </FormData>
          <FormData>
            <label htmlFor="password">Password</label>
            <FormRow>
              <BiLock size={30} />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormRow>
            {error && (
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                  fontWeight: "700",
                  marginTop: "1rem",
                }}
              >
                {error}
              </p>
            )}
            {success && (
              <p
                style={{
                  color: "var(--success)",
                  textAlign: "center",
                  fontWeight: "700",
                  marginTop: "1rem",
                }}
              >
                {success}
              </p>
            )}
            <SubmitRow>
              <input
                type="submit"
                value={clickLogin ? "Please wait...." : "Login"}
                role="button"
                style={{
                  opacity: `${clickLogin ? "0.5" : "1"}`,
                }}
              />
              <div>
                {clickLogin ? (
                  <CircularProgress
                    style={{
                      color: "white",
                      fontSize: "small",
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
            </SubmitRow>
            <Reset>Forgot Password?</Reset>
            <Register>
              <p>New to Letelect?</p>
              <Link to="/register">
                <span>Create new account.</span>
              </Link>
            </Register>
          </FormData>
        </Form>
      </Container>
    </Parent>
  );
};

const Parent = styled.div`
  background-size: contain;
  background-position: left right;
  background-repeat: repeat;
  background-image: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M826.5 639Q660 778 471.5 827t-265-139Q130 500 191 285T494 80.5q242 10.5 370.5 215t-38 343.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23003fac%22 d=%22M826.5 639Q660 778 471.5 827t-265-139Q130 500 191 285T494 80.5q242 10.5 370.5 215t-38 343.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  /* From https://css.glass */
  background: rgba(0, 0, 0, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding-inline: 1rem;
  padding-block: 2rem;
  & h1 {
    font-family: var(--font-dance);
    color: var(--text-white);
    text-align: center;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const Form = styled.form``;
const FormData = styled.div`
  margin-block: 0.8rem;
  & label {
    color: var(--text-white);
    font-size: 0.9rem;
    font-weight: 700;
  }
`;
const FormRow = styled.div`
  background: #e8f0fe;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  border-radius: 0.3rem;
  margin-top: 0.25rem;
  & input {
    width: 100%;
    background: #e8f0fe;
    padding-block: 0.6rem;
    outline: none;
    border: none;
    padding-left: 0.5rem;
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }
`;

const SubmitRow = styled.div`
  width: 100%;
  margin-block: 1rem;
  & div {
    text-align: center;
    margin-top: 0.75rem;
  }
  & input {
    width: 100%;
    padding-block: 0.7rem;
    font-size: 0.95rem;
    color: var(--text-white);
    background: var(--bg-blue);
    font-weight: 600;
    font-family: var(--font-poppins);
    border-radius: 0.3rem;
    border: none;
    cursor: pointer;
  }
`;
const Reset = styled.p`
  display: flex;
  justify-content: end;
  align-items: center;
  color: var(--text-white);
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Register = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-block: 0.5rem;
  color: var(--text-white);

  & p {
    font-family: var(--font-poppins);
    font-weight: 600;
  }
  & a {
    background: inherit;
    color: var(--bg-blue);
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
    & span {
      font-family: var(--font-poppins);
      font-weight: 700;
    }
  }
`;
export default Login;
