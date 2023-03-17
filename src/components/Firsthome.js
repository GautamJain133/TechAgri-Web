import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Navbar from "./Navbar";
import Navbarhome from "./Navbar";

return (
  <>
    <Navbarhome />

    <div>
      <div>carousel image</div>

      <div>
        <h2>Search for your crop : </h2>
      </div>
      <div>
        <p>search bar</p>
        <div class="input-group">
          <div class="form-outline">
            <input id="search-input form1" type="search" class="form-control" />
            <label class="form-label" for="form1">
              Search
            </label>
          </div>
          <button id="search-button" type="button" class="btn btn-primary">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div>cards</div>
    </div>
  </>
);

export default Home;
