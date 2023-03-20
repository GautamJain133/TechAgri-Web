import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import { useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const { user } = useUserAuth();

  const createToken = async () => {
    const token = user && (await user.getIdToken());
    console.log("gautam your token is :" + token);
    const payloadHeader = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `${token}`,
      },
    };
    return payloadHeader;
  };

  const [check, setcheck] = useState(3);

  useEffect(() => {
    if (check === 1) navigate("/farmer");
    else if (check === 2) navigate("/company");
    else if (check === 0) navigate("/registration");
  }, [check]);

  const typecheck = async () => {
    const header = await createToken();
    console.log("header is " + header.headers["x-auth-token"]);
    const res = await axios.get(
      "/check-authentication",

      header
    );

    setcheck(res.data);
    console.log("hello brother" + check);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      await typecheck();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="p-4 box" style={{ width: "40%" }}>
          <h2 className="mb-3">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Log In
              </Button>
            </div>
          </Form>
          <hr />
          <div>
            <GoogleButton
              className="g-btn"
              type="dark"
              onClick={handleGoogleSignIn}
            />
          </div>
        </div>
        <div className="p-4 box mt-3 text-center" style={{ width: "40%" }}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
