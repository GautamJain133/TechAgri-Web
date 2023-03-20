import React, { useState } from "react";
import Navbarhome from "./Navbar";
import "../Styles/company.css";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import axios from "axios";
import { useUserAuth } from "../context/UserAuthContext";

function Company() {
  const { user } = useUserAuth();

  const navigate = useNavigate();

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
  //   event.preventDefault();

  let [Cropname, setCropname] = useState("");

  // console.log("header is sfjsdkfj " + header.headers["x-auth-token"]);


  const[Data, setData] = useState([]);

  React.useEffect(() => {
    axios
      .get("/allfarmers")
      .then((response) => {
        setData(response.data);
        console.log(Data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const peektime = async () => {
    Cropname = window.prompt("Enter crop name");
    alert("November-December");
    setCropname(Cropname);
    const header = await createToken();
    let res = await axios.post("/highest-production",{
        "cropname": Cropname
    },header);
    //   setCropname(res);
    // alert(res);

    // alert(res.data);
  };

  return (
    <>
      <Navbarhome />
      <div className="d-flex flex-column mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex justify-content-center align-items-center w-100 h-100 ps-lg-0 ps-sm-3 sec-bar p-4 ps-3 mb-4">
            <input
              className=" ps-md-3 ps-3 ms-5"
              type="text"
              placeholder="Search for crops"
            />
            <div
              className="btn btn-primary d-flex ms-3 align-items-center justify-content-center"
              style={{ backgroundColor: "#B6E388", color: "black" }}
            >
              SEARCH <div />
            </div>

            <div
              className="harvest"
              onClick={peektime}
              style={{
                width: "50%",
                backgroundColor: "#FF884B",
                color: "white",
                padding: "3px",
                paddingTop: "5px",
                textAlign: "center",
                marginLeft: "150px",
                borderRadius: "10px",
              }}
            >
              <h4>Peak Harvesting Time for the crop</h4>
            </div>
          </div>
          <div className="d-flex flex-row gap-4 align-items-start justify-content-start mb-5">
            <select
              name="cars"
              id="cars"
              className="p-2"
              style={{ width: "150px" }}
            >
              <option value="0">starting month</option>
              <option value="1">Jan</option>
              <option value="2">Fab</option>
              <option value="3">Mar</option>
              <option value="4">Apr</option>
              <option value="4">May</option>
              <option value="4">June</option>
              <option value="4">July</option>
              <option value="4">Aug</option>
              <option value="4">Sep</option>
              <option value="4">Oct</option>
              <option value="4">Nov</option>
              <option value="4">Dec</option>
            </select>

            <select
              name="cars"
              id="cars"
              className="p-2"
              style={{ width: "150px" }}
            >
              <option value="0">ending month</option>
              <option value="1">Jan</option>
              <option value="2">Feb</option>
              <option value="3">Mar</option>
              <option value="4">Apr</option>
              <option value="4">May</option>
              <option value="4">June</option>
              <option value="4">July</option>
              <option value="4">Aug</option>
              <option value="4">Sep</option>
              <option value="4">Oct</option>
              <option value="4">Nov</option>
              <option value="4">Dec</option>
            </select>

            <input type="number" placeholder=" Quantity"></input>

            <select className="p-1" style={{ width: "150px" }}>
              <option value="0">Pesticides</option>
              <option value="0">glyphosate</option>
              <option value="0">Acephate</option>
              <option value="0">Propoxur</option>
              <option value="0">Metaldehyde</option>
              <option value="0">DDT</option>
            </select>
          </div>

          <div className="d-flex flex-row gap-2 flex-wrap justify-content-start align-items-start ms-5 me-5 mb-5">
            <Card style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "left" }}>Mohan Lal</Card.Title>
                <Card.Text
                  className="ms-0 text-muted mb-0"
                  style={{ textAlign: "left" }}
                >
                  Rice
                </Card.Text>
                <Card.Text
                  className="ms-0 text-muted mb-0"
                  style={{ textAlign: "left" }}
                >
                  1000 kg
                </Card.Text>
                <Card.Text
                  className="ms-0 text-muted mb-0"
                  style={{ textAlign: "left" }}
                >
                  31 street, Bikaner
                </Card.Text>
                <Card.Text
                  className="ms-0 text-muted mb-0"
                  style={{ textAlign: "left" }}
                >
                  302039
                </Card.Text>
                <Card.Text
                  className="ms-0 text-muted mb-4"
                  style={{ textAlign: "left" }}
                >
                  Rajasthan
                </Card.Text>
                <Button style={{ backgroundColor: "#B6E388", color: "black" }}>
                  123-456-7890
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "left" }}>Ashwin Lal</Card.Title>
                <Card.Text
                  className="ms-0 text-muted mb-0"
                  style={{ textAlign: "left" }}
                >
                  Rice
                </Card.Text>
                <Card.Text
                  className="ms-0 text-muted mb-0"
                  style={{ textAlign: "left" }}
                >
                  2500 Kg
                </Card.Text>
                <Card.Text
                  className="ms-0 text-muted mb-0"
                  style={{ textAlign: "left" }}
                >
                  Old court road , Chaumahla
                </Card.Text>
                <Card.Text
                  className="ms-0 text-muted mb-0"
                  style={{ textAlign: "left" }}
                >
                  303020
                </Card.Text>
                <Card.Text
                  className="ms-0 text-muted mb-4"
                  style={{ textAlign: "left" }}
                >
                  Jhalawar
                </Card.Text>
                <Button style={{ backgroundColor: "#B6E388", color: "black" }}>
                  987-654-3219
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "left" }}>Gautam Lal</Card.Title>
                <Card.Text
                  className="ms-0 text-muted mb-0"
                  style={{ textAlign: "left" }}
                >
                  Wheat
                </Card.Text>
                <Card.Text
                  className="ms-0 text-muted mb-0"
                  style={{ textAlign: "left" }}
                >
                  1500 Kg
                </Card.Text>
                <Card.Text
                  className="ms-0 text-muted mb-0"
                  style={{ textAlign: "left" }}
                >
                  23 street, Rawatbhaata
                </Card.Text>
                <Card.Text
                  className="ms-0 text-muted mb-0"
                  style={{ textAlign: "left" }}
                >
                  304050
                </Card.Text>
                <Card.Text
                  className="ms-0 text-muted mb-4"
                  style={{ textAlign: "left" }}
                >
                  Rajasthan
                </Card.Text>
                <Button style={{ backgroundColor: "#B6E388", color: "black" }}>
                  555-666-7777
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "left" }}>Pawan Lal</Card.Title>
                <Card.Text
                  className="ms-0 text-muted mb-0"
                  style={{ textAlign: "left" }}
                >
                  Corn
                </Card.Text>
                <Card.Text
                  className="ms-0 text-muted mb-0"
                  style={{ textAlign: "left" }}
                >
                  700 Kg
                </Card.Text>
                <Card.Text
                  className="ms-0 text-muted mb-0"
                  style={{ textAlign: "left" }}
                >
                  31, Alwar
                </Card.Text>
                <Card.Text
                  className="ms-0 text-muted mb-0"
                  style={{ textAlign: "left" }}
                >
                  302010
                </Card.Text>
                <Card.Text
                  className="ms-0 text-muted mb-4"
                  style={{ textAlign: "left" }}
                >
                  Rajasthan
                </Card.Text>
                <Button style={{ backgroundColor: "#B6E388", color: "black" }}>
                  456-456-4567
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Samadhaan</h3>
                <p>
                  Skit College, Ramnagriya <br />
                  Jaipur, Rajasthan
                  <br />
                  India <br />
                  <br />
                  <strong>Phone:</strong> +91 123 456 7890
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
              </div>

              <div className="col-lg-6 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a
                      href="#"
                      style={{ marginLeft: "0", marginBottom: "10px" }}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{ marginLeft: "0", marginBottom: "10px" }}
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{ marginLeft: "0", marginBottom: "10px" }}
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{ marginLeft: "0", marginBottom: "10px" }}
                    >
                      Terms of service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{ marginLeft: "0", marginBottom: "10px" }}
                    >
                      Privacy policy
                    </a>
                  </li>
                </ul>
              </div>

              <div
                className="col-lg-6 col-md-6 footer-links"
                style={{ marginLeft: "120px" }}
              >
                <h4>Our Social Networks</h4>
                <p className="ms-0">Connect with us for regular updates</p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" className="facebook">
                    <FaInstagram />
                  </a>
                  <a href="#" className="instagram">
                    <FaFacebookSquare />
                  </a>
                  <a href="#" className="linkedin">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Samadhaan</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/ninestars-free-bootstrap-3-theme-for-creative/ */}
            copyright 2022
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </>
  );
}

export default Company;
