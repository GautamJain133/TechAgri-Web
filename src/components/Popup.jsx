import React from "react";
import "../assets/css/popup.css";

const Popup = (props) => {
  const { recommendedFertilizer, handlepopup } = props;
  return (
    <>
      <div className="popup">
        <div className="popup-content">
          <h2>Recommended Fertilizer</h2>
          <p>Name: {recommendedFertilizer.name}</p>
          <p>Type: {recommendedFertilizer.type}</p>
          <p>Application Method: {recommendedFertilizer.application_method}</p>
          <p>Rate: {recommendedFertilizer.rate}</p>
          <p>Price: {recommendedFertilizer.price}</p>
          <button onClick={handlepopup}> ok </button>
        </div>
      </div>
    </>
  );
};

export default Popup;
