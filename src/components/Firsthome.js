import React from "react";
import { Button } from "react-bootstrap";
import Navbar from "./Navbar";
//import app from "../firebase";
//import { auth } from "../firebase";

const Home = () => {

  return (
    <>
      <Navbar/>

      {/* <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>

      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div> */}

      <div>
        <div>
          carousel image
        </div>

        <div>
            <h2>Search for your crop : </h2>
        </div>
        <div>
            <p>search bar</p>
            <div class="input-group">
            <div class="form-outline">
                <input id="search-input form1" type="search" class="form-control" />
                <label class="form-label" for="form1">Search</label>
            </div>
            <button id="search-button" type="button" class="btn btn-primary">
                <i class="fas fa-search"></i>
            </button>
            </div>
        </div>
        <div>
            cards
        </div>
      </div>
    </>
  );
};

export default Home;
