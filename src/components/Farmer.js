import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbarhome from './Navbar';
import "../assets/css/style.css"
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookSquare, FaInstagram, FaLinkedinIn} from "react-icons/fa";

function Farmer() {
  return (
    <>
      <Navbarhome/>
      <div className="container mb-5 mt-5">
        <div className="row mb-5">
            <div className="col-lg-6 d-flex justify-content-center">
                <div className="card">
                    <div className="card-body text-center">
                        <div className="card-img pt-2 pb-3"> <img src={("../assets/img/image1.png")} alt=""/></div>
                        <div className="name h5"><a href="http://127.0.0.1:5500/html_files/crop-data-form.html">Give your crop data</a></div>
                        <div className="testimonial"> Provide information about your crop and hence connect to the companies for selling </div>
                    </div>
                </div>
            </div>
        
            <div className="col-lg-6 d-flex justify-content-center">
                <div className="card">
                    <div className="card-body text-center ms-0" style={{paddingTop:"30px", paddingBottom:"35px", paddingLeft:"80px", paddingRight:"80px"}}>
                        <div className="card-img pt-2 pb-3"><img src={("../assets/img/image1.png")} alt=""/> </div>
                        <div className="name h5" style={{cursor: "pointer"}} onClick={(e)=>alert("According to your location\nTemperature: 26℃\nPrecipitation: 1%\nHumidity: 54%\nWind: 5km/h")}><a href="#">Get weather alerts</a></div>
                        <div className="testimonial"> Get latest weather alerts for your location.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 d-flex justify-content-center">
                <div className="card">
                    <div className="card-body text-center">
                        <div className="card-img pt-2 pb-3"> <img src={("../assets/img/image1.png")} alt=""/> </div>
                        <div className="name h5"><a href="http://127.0.0.1:5500/html_files/practice.html">Best Practice Suggestion</a></div>
                        <div className="testimonial"> Know about the latest farming and irrigation techniques to maximize their production </div>
                    </div>
                </div>
            </div>
        
            <div className="col-lg-6 d-flex justify-content-center">
                <div className="card">
                    <div className="card-body text-center" style={{padding:"20px", paddingBottom:"40px"}}>
                        <div className="card-img pt-2 pb-3"> <img src={("../assets/img/image1.png")} alt=""/> </div>
                        <div className="name h5"><a href="http://127.0.0.1:5500/html_files/crop-suggestion.html">Crop Suggestion</a></div>
                        <div className="testimonial"> Get crop suggestion based on the soil content of your land </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 mt-5 d-flex justify-content-center">
                <div className="card">
                    <div className="card-body text-center" style={{padding:"20px", paddingBottom:"40px"}}>
                        <div className="card-img pt-2 pb-3"> <img src={("../assets/img/image1.png")} alt=""/> </div>
                        <div className="name h5"><Link to="/fertilizer">Fertilizer Recommendation</Link></div>
                        <div className="testimonial"> Get fertilizer Recommendation based on the soil content of your land </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 mt-5 d-flex justify-content-center">
                <div className="card">
                    <div className="card-body text-center" style={{padding:"20px", paddingBottom:"40px"}}>
                        <div className="card-img pt-2 pb-3"> <img src={("../assets/img/image1.png")} alt=""/> </div>
                        <div className="name h5"><Link to="/budgeting">Food Budgeting</Link></div>
                        <div className="testimonial"> Calculate how much you need to spend on groceries each week based on your family size and dietary needs.</div>
                    </div>
                </div>
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
                Skit College, Ramnagriya <br/>
                Jaipur, Rajasthan<br/>
                India <br/><br/>
                <strong>Phone:</strong> +91 123 456 7890<br/>
                <strong>Email:</strong> info@example.com<br/>
              </p>
            </div>

            <div className="col-lg-6 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#" style={{marginLeft: "0",marginBottom: "10px"}}>Home</a></li>
                <li><a href="#" style={{marginLeft: "0",marginBottom: "10px"}}>About us</a></li>
                <li><a href="#" style={{marginLeft: "0",marginBottom: "10px"}}>Services</a></li>
                <li><a href="#" style={{marginLeft: "0",marginBottom: "10px"}}>Terms of service</a></li>
                <li><a href="#" style={{marginLeft: "0",marginBottom: "10px"}}>Privacy policy</a></li>
              </ul>
            </div>

            <div className="col-lg-6 col-md-6 footer-links" style={{marginLeft: "120px"}}>
              <h4>Our Social Networks</h4>
              <p className="ms-0">Connect with us for regular updates</p>
              <div className="social-links mt-3">
                <a href="#" className="twitter"><FaTwitter/></a>
                <a href="#" className="facebook"><FaInstagram/></a>
                <a href="#" className="instagram"><FaFacebookSquare/></a>
                <a href="#" className="linkedin"><FaLinkedinIn/></a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="copyright">
          &copy; Copyright <strong><span>Samadhaan</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/ninestars-free-bootstrap-3-theme-for-creative/ */}
          copyright 2022
        </div>
      </div>
      </footer>{/* End Footer */}
    </>
  )
}

export default Farmer;
