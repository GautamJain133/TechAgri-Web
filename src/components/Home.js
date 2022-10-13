import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Navbar from "./Navbar";
//import app from "../firebase";
//import { auth } from "../firebase";

const Home = () => {
  const { logOut, user } = useUserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const createToken = async () => {
    const token = user && (await user.getIdToken());

    const payloadHeader = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `${token}`,
      },
    };
    return payloadHeader;
  };

  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
    const header = await createToken();
    console.log("header is " + header.headers["x-auth-token"]);

    // console.log("hi" + header.headers["x-auth-token"]);

    axios
      .post(
        "/user",
        {
          Name: name,
        },
        header
      )
      .then((response) => {
        console.log("response received successfully");
      });
  };

  return (
    <>
      <Navbar/>

      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>

      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
