import React from "react";
import { styled } from "styled-components";
import { BiUserCircle, BiLock } from "react-icons/bi";
import "./../index.css";

const Login = () => {
  return (
    <Parent
    // style={{
    //   backgroundImage: `url(${blob})`,
    // }}
    >
      <Container>
        <h1>Welcome Back!</h1>
        <Form action="">
          <FormData>
            <label htmlFor="email">Email</label>
            <FormRow>
              <BiUserCircle size={30} />
              <input type="email" name="email" />
            </FormRow>
          </FormData>
          <FormData>
            <label htmlFor="password">Password</label>
            <FormRow>
              <BiLock size={30} />
              <input type="password" name="password" />
            </FormRow>
            <SubmitRow>
              <input type="submit" value="Login" />
            </SubmitRow>
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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  /* From https://css.glass */
  background: rgba(0, 0, 0, 0.8);
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
`;

const Form = styled.form``;
const FormData = styled.div`
  margin-block: 0.8rem;
  & label {
    color: var(--text-white);
    font-size: 0.9rem;
  }
`;
const FormRow = styled.div`
  background: #e8f0fe;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  border-radius: 0.3rem;
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
  & input {
    width: 100%;
    padding-block: 0.7rem;
    font-size: 0.95rem;
    color: var(--text-white);
    background: var(--bg-blue);
    font-weight: 600;
    font-family: var(--font-open);
    border-radius: 0.3rem;
    border: none;
  }
`;
export default Login;
