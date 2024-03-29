import React, { useState } from "react";
import { BiLocationPlus, BiPhoneCall } from "react-icons/bi";
import { BsEnvelope } from "react-icons/bs";
import { styled } from "styled-components";
import axios from "./../api/axios";
import contact from "./../images/contact.jpg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const CONTACT_URL = "/contact-us/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        CONTACT_URL,
        JSON.stringify({ name, email, phone, message }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response?.data?.message;
      setSuccess(data);
    } catch (err) {
      console.log(err.stack);
      setError(err.stack);
    }
  };
  return (
    <React.Fragment>
      <Header
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/8715128/pexels-photo-8715128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        }}
      >
        <div className="headers">
          <h1>We'd love to hear from you</h1>
        </div>
      </Header>
      <Container>
        <h1>Get in touch</h1>
        <h3>Contact us for all your enquiries</h3>
        <Social>
          <Children>
            <span>
              <BiLocationPlus color="var(--bg-blue)" fontSize="2rem" />
            </span>
            <span style={{ fontWeight: "600" }}>
              University of Ghana, Legon
            </span>
          </Children>
          <Children>
            <span>
              <BiPhoneCall color="var(--bg-blue)" fontSize="2rem" />
            </span>
            <span style={{ fontWeight: "600" }}>+233 20 558 2492</span>
          </Children>
          <Children>
            <span>
              <BsEnvelope color="var(--bg-blue)" fontSize="2rem" />
            </span>
            <span style={{ fontWeight: "600" }}>info@letelect.com</span>
          </Children>
        </Social>
      </Container>
      <Parent>
        <Form onSubmit={handleSubmit}>
          <Sender>
            <div>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">E-mail Address</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </Sender>
          <Input>
            <label htmlFor="enquiry">Leave a message</label>
            <textarea
              name="enquiry"
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </Input>
          <SendBox>
            <input type="submit" value="Send Message" />
          </SendBox>
        </Form>
        {success && (
          <h2
            style={{
              color: "green",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            {success}
          </h2>
        )}
        {error && (
          <h2
            style={{
              color: "red",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            {error}
          </h2>
        )}
      </Parent>
    </React.Fragment>
  );
};

const Header = styled.div`
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: 80vh;
  display: grid;
  place-items: center;
  color: var(--text-white);
  & div {
    width: 60%;
    text-align: center;
    margin: auto;
    color: var(--text-white);
    & h1 {
      font-family: var(--font-open);
      font-size: 3rem;
    }
  }
`;

const Container = styled.div`
  margin: auto;
  width: 60%;
  margin-block: 2rem;
  & h1 {
    font-size: 2rem;
    text-align: center;
    color: var(--bg-blue);
  }
  & h3 {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const Children = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & :nth-child(2) {
    color: var(--gray-shade);
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  gap: 2rem;
  padding: 3rem;
  margin-block: 2rem;
  /* From https://css.glass */
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const Sender = styled.div`
  & div {
    display: flex;
    flex-direction: column;
  }
  & input {
    margin-bottom: 1rem;
    padding-block: 1.2rem;
    padding-left: 0.5rem;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 0.3rem;
    margin-top: 0.5rem;
    outline: 1px solid var(--bg-blue);
  }
`;
const Input = styled.div`
  & textarea {
    height: 84%;
    width: 100%;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin-top: 0.5rem;
    border-radius: 0.3rem;
    outline: 1px solid var(--bg-blue);
  }
`;

const Parent = styled.div`
  width: 60%;
  margin: auto;
  & label {
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

const SendBox = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  & input {
    width: 40%;
    padding-block: 1rem;
    background-color: var(--bg-blue);
    font-family: var(--font-poppins);
    font-weight: 600;
    color: var(--text-white);
    font-size: 1rem;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
    text-transform: uppercase;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

export default Contact;
