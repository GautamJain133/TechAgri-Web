import React, { useState } from "react";
import "../Styles/registration.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Reg = () => {
  const navigate = useNavigate();

  const { user } = useUserAuth();

  const [name, setName] = useState();
  const [type, setType] = useState("1");
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const [pincode, setPincode] = useState();

  const postData = async (e) => {
    e.preventDefault();
    const header = await createToken();
    console.log("type:", type);
    let response = await axios.post(
      "/data",
      {
        type: type,
        name: name,
        phno: contact,
        address: address,
        pincode: pincode,
      },
      header
    );
    if (type == 1) {
      navigate("/farmer");
    } else navigate("/company");
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

  return (
    <>
      <div
        className="container reg_container"
        style={{ width: "500px", marginLeft: "400px" }}
      >
        <div className="role">
          <h5>Select your role</h5>
          <div className="input-field select_role">
            <div className="select">
              <select
                className="form-control fs-6"
                style={{ color: "#827B75" }}
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                id="select_role"
              >
                <option value="1">Farmer</option>
                <option value="2">Production company</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form">
          <div className="form-group">
            <label htmlFor="name">Production company name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Company address</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact number</label>
            <input
              type="number"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Pincode</label>
            <input
              type="number"
              name="pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="form-control"
              required
            />
          </div>
        </div>
        <a href="#">
          <button
            type="submit"
            style={{ marginTop: "20px" }}
            className="sub-button"
            onClick={postData}
          >
            SUBMIT
          </button>
        </a>
      </div>
    </>
  );
};

export default Reg;
