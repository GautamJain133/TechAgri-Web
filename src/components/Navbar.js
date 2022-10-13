import React from "react";
// import ".././styles/styles_index.css";
import { Link } from "react-router-dom";
// import { NavDropdown } from "react-bootstrap";
// import axios from "axios";
// import Cookies from "universal-cookie";
// import { useNavigate } from "react-router-dom";

function Navbar() {
//   const baseURL = "/home";

//   const [post, setPost] = React.useState(null);
//   console.log();

//   let name = localStorage.getItem("Name");
//   console.log("name is " + name);

//   React.useEffect(() => {
//     axios
//       .get(baseURL)
//       .then((response) => {
//         setPost(response.data);
//         // if (response.data != null) {
//         //   name = response.data.username;
//         // }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   let type;
//   if (post != null) {
//     type = post.usertype;
//   }

//   const navigate = useNavigate();

//   const cookies = new Cookies();

//   const logout = () => {
//     cookies.remove("authToken");
//     localStorage.clear();
//     navigate("/hometo");
//     Navbar();
//   };

  return (
    <div>
      <section id="title">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            {/* <Link className="navbar-brand d-flex flex-row" to="/">
              <img
                src={require("../Images/logo.png")}
                alt="logo"
                width="35"
                height="35"
                className="d-inline-block align-text-top"
              />
              <div className="px-2">Self Help Groups</div>
            </Link> */}

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/hometo">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/KnowAbout">
                    Know About SHG
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Gallery">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
                
                {/* <li className="nav-item">
                  {name != null ? (
                    // <a className="nav-link" href="#">
                    //   {name}
                    // </a>
                    <NavDropdown
                      title={name}
                      id="basic-nav-dropdown"
                      className="nav-link fs-6 p-0 mb-1 mt-1"
                      style={{ backgroundColor: "#40514E" }}
                    >
                      <NavDropdown.Item href="http://localhost:3000/userprofile">
                        My Profile
                      </NavDropdown.Item>
                      {type==='2'?(
                        <NavDropdown.Item href="http://localhost:3000/sellerdashboard">
                        My dashboard
                      </NavDropdown.Item>
                      ):(
                        <NavDropdown.Item href="http://localhost:3000/userorders">
                        My orders
                      </NavDropdown.Item>
                      )}
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4" onClick={logout}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  )}
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;