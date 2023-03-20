import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Navbarhome from "./Navbar";
import { Link } from "react-router-dom";
import "../Styles/style.css";

import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

//import app from "../firebase";
//import { auth } from "../firebase";

const Home = () => {
  const { logOut, user } = useUserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      // await typecheck();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  //
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

  const [check, setcheck] = useState(3);

  const typecheck = async () => {
    const header = await createToken();
    console.log("header is " + header.headers["x-auth-token"]);
    const res = await axios.get(
      "/check-authentication",

      header
    );

    setcheck(res.data);
    console.log("check is " + check);
  };

  if (check == 2) navigate("/registration");

  return (
    <>
      <Navbarhome />
      {/* panel */}
      <section
        id="hero"
        className="d-flex align-items-center"
        style={{ marginTop: "0", paddingTop: "0" }}
      >
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Better Technology, Better Agriculture, Better Future</h1>
              <h2>
                Team Kisan provides you with a solution to improve lives of
                farmers
              </h2>
              <div>
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img d-flex justify-content-end align-items-end">
              <img
                src={require("../assets/img/carou.png")}
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        {/* about section */}

        <section id="about" className="about" style={{ paddingTop: "60px" }}>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                <img
                  src={require("../assets/img/plant-3.png")}
                  className="img-fluid animated"
                  alt=""
                  data-aos="zoom-in"
                  height="900"
                  width="900"
                />
              </div>
              <div className="col-lg-6 pt-5 pt-lg-0">
                <h3 data-aos="fade-up">Why to use our website?</h3>
                <p data-aos="fade-up" data-aos-delay="100">
                  This website provides one-platform for the farmers as well as
                  the comapnies to improve their production and efficient use of
                  the harvest.
                </p>

                <div className="row">
                  <div
                    className="col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i className="bx bx-receipt"></i>
                    <h4>For Companies</h4>
                    <p>
                      Companies can get the data related to crop harvesting and
                      their quality and use it to schedule their production
                    </p>
                  </div>
                  <div
                    className="col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i className="bx bx-cube-alt"></i>
                    <h4>For Farmers</h4>
                    <p>
                      Farmers can use various features such as- weather alerts,
                      best farming practices and pest control
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}

        {/* ======= Services Section ======= */}
        <section
          id="services"
          className="services section-bg"
          style={{ paddingTop: "100px" }}
        >
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Services</h2>
              <p>Check out the great services we offer</p>
            </div>

          <div className="ser d-flex flex-row justify-content-center align-items-center">
            <a href="http://127.0.0.1:5500/html_files/food_security.html" className="pe-5 ps-2 border-end border-secondary">
              <div className="ru d-flex flex-column justify-content-center">
                <div className="ms-1 text-center" style={{color: "white",fontSize:"18px"}}>Food Security</div>
              </div>
            </a>
            
            <a href="http://127.0.0.1:5500/html_files/certification_food.html" className="pe-5 ps-2 border-end border-secondary">
              <div className="ru">
                <div className="mt-2 text-center" style={{color: "white",fontSize:"18px"}}>Food Certification</div>
              </div>
            </a>
            
            <Link to="/volunteering" className="pe-5 ps-2 border-end border-secondary">
              <div className="ru d-flex flex-column justify-content-center">
                <div className="mm mt-3 text-center" style={{color: "white",fontSize:"18px"}}>Volunteering Opportunities</div>
              </div>
            </Link>
           
           <a href="http://127.0.0.1:5500/html_files/donation.html">
             <div className="ru d-flex flex-column justify-content-center">
                <div className="mt-4 text-center ms-2" style={{color: "white",fontSize:"18px"}}>Donation</div>
              </div>
           </a>
            
          </div>

            <div className="row">
              <p className="fs-5 ms-0">For Companies</p>
            </div>

            <div className="row">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon-box">
                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                <h4 className="title"><a href="">Provide Crop Harvest Data</a></h4>
                <p className="description" style={{textAlign:"start", marginLeft:"0", marginTop: "35px"}}>Companies will be given the sowing and harvesting information for the required crop. Aslo the type of soil used</p>
              </div>
            </div>
  
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon-box">
                <div className="icon"><i className="bx bx-file"></i></div>
                <h4 className="title"><a href="">Quality Standards</a></h4>
                <p className="description" style={{textAlign:"start", marginLeft:"0", marginTop: "35px"}}>Company can filter the options and eliminate some chemicals used by using our sorting options to miantain quality needs of the product.</p>
              </div>
            </div>
  
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon-box">
                <div className="icon"><i className="bx bx-tachometer"></i></div>
                <h4 className="title"><a href="">Production Scheduling</a></h4>
                <p className="description" style={{textAlign:"start", marginLeft:"0", marginBottom: "80px"}}>This will help the organization to maximise the profit by reducing cost.</p>
              </div>
            </div>
  
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
              <div className="icon-box">
                <div className="icon"><i className="bx bx-world"></i></div>
                <h4 className="title"><a href="">Acquiring Harvest</a></h4>
                <p className="description" style={{textAlign:"start", marginLeft:"0", marginBottom:"23px"}}>The warehouses (from which crop will be taken) can be sorted on the distance from the company manufacturing unit and the crop warehouse.</p>
              </div>
            </div>
  
          </div>

          <div className="row">
            <p className="fs-5 ms-0">
                For Farmers
            </p>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon-box">
                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                <h4 className="title"><a href="">Weather Forecast</a></h4>
                <p className="description" style={{textAlign:"start", marginLeft:"0", marginBottom: "43px"}}>Farmers can use use the weather forecasting functionality to change the farming techniques accordingly.</p>
              </div>
            </div>
  
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon-box">
                  <div className="icon"><i className="bx bx-file"></i></div>
                <h4 className="title"><a href="">Pest Control</a></h4>
                <p className="description" style={{textAlign:"start", marginLeft:"0", marginBottom: "100px"}}>The farmer can simply mention the the pest that has diseased the crop.</p>
              </div>
            </div>
  
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon-box">
                <div className="icon"><i className="bx bx-tachometer"></i></div>
                <h4 className="title"><a href="">Best Farming Practices</a></h4>
                <p className="description" style={{textAlign:"start", marginLeft:"0"}}>The farmer can get to know about the best farming techniques based on the location of farming, the standard of seeds and groundwater availability.</p>
              </div>
            </div>
  
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
              <div className="icon-box">
                <div className="icon"><i className="bx bx-world"></i></div>
                <h4 className="title"><a href="">Crop Suggestion</a></h4>
                <p className="description" style={{textAlign:"start", marginLeft:"0", marginBottom: "83px"}}>Farmer will be provided with Crop suggestion on the basis of inputs given of the soil contents</p>
              </div>
            </div>
  
          </div>
          </div>
        </section>
        {/* End Services Section */}

        {/* Buttons respective */}
        <section id="portfolio" className="portfolio" style={{backgroundColor:"#F0F8FF"}}>
          <div className="container" data-aos="fade-up">
            {/* <div className="row gy-4 p-5">
          <div className="col-lg-6 btn-get-started scrollto">
          <div>
              <a href="#about" className="btn btn-get-started scrollto">For Companies</a>
          </div>
          </div>
          <div className="col-lg-6 btn-get-started scrollto">
          <div>
              <a href="#about" className="btn btn-get-started scrollto">For Farmers</a>
          </div>
          </div>
      </div>    */}

            <div className="p-5 d-flex flex-row gap-4 justify-content-center align-items-center">
              <Link to="/company" style={{marginRight:"1px"}}><Button
                size="lg"
                style={{ backgroundColor: "#B5DEFC", color: "#001C44",padding:"20px",marginRight: "15px" }}
              >
                For Companies
              </Button></Link>
              <Link to="/farmer" style={{marginLeft:"1px"}}><Button
                size="lg"
                style={{ backgroundColor: "#B5DEFC", color: "#001C44", paddingTop:"20px",paddingBottom:"20px",paddingLeft:"27px",paddingRight:"27px",marginLeft: "15px"}}
              >
                For Farmers
              </Button></Link>
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        {/* ======= Team Section ======= */}
        <section id="team" className="team">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Team</h2>
              <p>Our team is always here to help</p>
            </div>

            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="member">
                  <img
                    src={require("../assets/img/gautamc.jpeg")}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Gautam Kumar Jain</h4>
                      <span>Core Team Lead</span>
                    </div>
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-lg-4 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="member">
                  <img
                    src={require("../assets/img/ashwin.jpg")}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Ashwin Gupta</h4>
                      <span>Team Manager</span>
                    </div>
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-lg-4 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="member">
                  <img
                    src={require("../assets/img/ashu.jpg")}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Ashu Agarwal</h4>
                      <span>Frontend Developer</span>
                    </div>
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-lg-4 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="member" style={{height:"260px"}}>
                  <img
                    src={require("../assets/img/dharmi.png")}
                    className="img-fluid"
                    alt=""
                    
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Dharmi Kapadiya</h4>
                      <span>React developer</span>
                    </div>
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Team Section */}

        {/* ======= Contact Us Section ======= */}
        <section id="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title mt-5">
              <h2>Contact Us</h2>
              <p>Contact us to get started</p>
            </div>

            <div className="row mb-5">
              <div
                className="col-lg-5 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>info@example.com</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+1 5589 55488 55s</p>
                  </div>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                    frameborder="0"
                    style={{ border: "0", width: "100%", height: "290px" }}
                  ></iframe>
                </div>
              </div>

              <div
                className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="name">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="name">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="10"
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Us Section */}
      </main>
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
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
      {/* <div>
  <div>
      <h2>Search for your crop : </h2>
  </div>
  <div>
      <p>search bar</p>
      <div className="input-group">
      <div className="form-outline">
          <input id="search-input form1" type="search" className="form-control" />
          <label className="form-label" htmlFor="form1">Search</label>
      </div>
      <button id="search-button" type="button" className="btn btn-primary">
          <i className="fas fa-search"></i>
      </button>
      </div>
  </div>
  <div>
      cards
  </div>
</div>     */}
      {/* <div className="p-4 box mt-3 text-center">
  Hello Welcome <br />
  {user && user.email}
</div>

<div className="d-grid gap-2">
  <Button variant="primary" onClick={handleLogout}>
    Log out
  </Button>
</div> */}
      );
    </>
  );
};

export default Home;
