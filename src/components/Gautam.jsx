import React, { useState } from "react";
import "../assets/css/gautam.css";
import Popup from "./Popup";
import axios from "axios";
import Spinner from "./Spinner.jsx";
import Navbarhome from './Navbar.js';

const Gautam = () => {
  const cropOptions = [
    { value: "wheat", label: "Wheat" },
    { value: "rice", label: "Rice" },
    { value: "corn", label: "Corn" },
    { value: "soybean", label: "Soybean" },
    { value: "cotton", label: "Cotton" },
    { value: "sugarcane", label: "Sugarcane" },
    { value: "potato", label: "Potato" },
    { value: "tomato", label: "Tomato" },
    { value: "onion", label: "Onion" },
    { value: "pepper", label: "Pepper" },
    { value: "cabbage", label: "Cabbage" },
    { value: "broccoli", label: "Broccoli" },
    { value: "carrot", label: "Carrot" },
    { value: "celery", label: "Celery" },
    { value: "cucumber", label: "Cucumber" },
    { value: "lettuce", label: "Lettuce" },
    { value: "pea", label: "Pea" },
    { value: "spinach", label: "Spinach" },
    { value: "watermelon", label: "Watermelon" },
    { value: "pumpkin", label: "Pumpkin" },
  ];

  const soilOptions = [
    { value: "sandy loam", label: "Sandy Loam" },
    { value: "clay loam", label: "Clay Loam" },
    { value: "silty loam", label: "Silty Loam" },
    { value: "sandy clay", label: "Sandy Clay" },
    { value: "silty clay", label: "Silty Clay" },
  ];

  const nitrogenOptions = [
    { value: 0, label: "0" },
    { value: 10, label: "10" },
    { value: 20, label: "20" },
    { value: 30, label: "30" },
    { value: 40, label: "40" },
    { value: 50, label: "50" },
    { value: 60, label: "60" },
    { value: 70, label: "70" },
    { value: 80, label: "80" },
    { value: 90, label: "90" },
    { value: 100, label: "100" },
    { value: 110, label: "110" },
    { value: 120, label: "120" },
    { value: 130, label: "130" },
    { value: 140, label: "140" },
    { value: 150, label: "150" },
  ];

  const [cropType, setCropType] = useState("");
  const [soilType, setSoilType] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");

  const handleCropChange = (e) => {
    setCropType(e.target.value);
  };

  const handleSoilChange = (e) => {
    setSoilType(e.target.value);
  };

  const handleNitrogenChange = (e) => {
    setNitrogen(e.target.value);
  };

  const handlePhosphorusChange = (e) => {
    setPhosphorus(e.target.value);
  };

  const handlePotassiumChange = (e) => {
    setPotassium(e.target.value);
  };

  const [showPopup, setShowPopup] = useState(false);
  const [fertilizer, setFertilizer] = useState({});
  const [loading, setLoading] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // call the fertilizer recommendation function with the user inputs
    setLoading(true);
    axios
      .post("/getrecommendations", {
        cropType,
        soilType,
        nitrogen,
        phosphorus,
        potassium,
      })
      .then((response) => {
        setFertilizer(response.data);
        setLoading(false);
        //console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    // console.log(cropType);
    // console.log(soilType);
    // console.log(nitrogen);
    // console.log(potassium);
    // console.log(potassium);

    // const recommendedFertilizer = {
    //   name: "Organic compost",
    //   type: "organic",
    //   application_method: "broadcast",
    //   rate: "3 tons/acre",
    //   price: "$50.00/ton",
    // };

    // display the recommended fertilizer to the user
    // setFertilizer(recommendedFertilizer);
    handlePopup();
  };

  return loading ? (
    <div
      style={{
        display: "flex",
        "justify-content": "center",
        "align-items": "center",

        height: "30rem",
      }}
    >
      <Spinner />
    </div>
  ) : (
    <>
    <Navbarhome/>
    <div className="ab">
      <div className="form-container mt-3">
        <h2>Fertilizer Recommendations </h2>

        {showPopup && (
          <Popup recommendedFertilizer={fertilizer} handlepopup={handlePopup} />
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cropType">Select Crop:</label>
            <select
              name="cropType"
              value={cropType}
              onChange={handleCropChange}
              placeholder="Select Crop Type"
              className="select-field"
              required
            >
              <option value="" disabled selected>
                Select Crop Type
              </option>
              {cropOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="soilType">Select Soil Type:</label>
            <select
              name="soilType"
              value={soilType}
              onChange={handleSoilChange}
              placeholder="Select Soil Type"
              className="select-field"
              required
            >
              <option value="" disabled selected>
                Select Soil Type
              </option>
              {soilOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="nitrogen">Nitrogen:</label>
            <select
              type="number"
              name="nitrogen"
              value={nitrogen}
              onChange={handleNitrogenChange}
              placeholder="Enter Nitrogen"
              className="input-field"
              required
            >
              <option value="" disabled selected>
                Select Nitrogen value
              </option>
              {nitrogenOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="phosphorus">Phosphorus:</label>
            <select
              type="number"
              name="phosphorus"
              value={phosphorus}
              onChange={handlePhosphorusChange}
              placeholder="Enter Phosphorus"
              className="input-field"
              required
            >
              <option value="" disabled selected>
                Select phosphorus value
              </option>
              {nitrogenOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="potassium">Potassium:</label>
            <select
              type="number"
              name="potassium"
              value={potassium}
              onChange={handlePotassiumChange}
              placeholder="Enter Potassium"
              className="input-field"
              required
            >
              <option value="" disabled selected>
                Select potassium value
              </option>
              {nitrogenOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="submit-btn w-25">
            Submit
          </button>
        </form>
      </div>{" "}
      </div>
    </>
  );
};

export default Gautam;
