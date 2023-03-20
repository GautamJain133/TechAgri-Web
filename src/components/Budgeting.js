import React from 'react';
import "../assets/css/budgeting.css";
import Navbarhome from './Navbar.js';

function budgeting(){

    function calculate() {
        // Get family size and dietary needs inputs
        var familySize = parseInt(document.getElementById("familySize").value);
        var dietaryNeeds = document.getElementById("dietaryNeeds").value;
      
        // Set cost per week based on family size and dietary needs
        var costPerWeek = 0;
        if (familySize <= 2) {
          if (dietaryNeeds == "standard") {
            costPerWeek = 70;
          } else if (dietaryNeeds == "vegetarian") {
            costPerWeek = 60;
          } else if (dietaryNeeds == "vegan") {
            costPerWeek = 50;
          }
        } else if (familySize <= 4) {
          if (dietaryNeeds == "standard") {
            costPerWeek = 100;
          } else if (dietaryNeeds == "vegetarian") {
            costPerWeek = 90;
          } else if (dietaryNeeds == "vegan") {
            costPerWeek = 80;
          }
        } else {
          if (dietaryNeeds == "standard") {
            costPerWeek = 130;
          } else if (dietaryNeeds == "vegetarian") {
            costPerWeek = 120;
          } else if (dietaryNeeds == "vegan") {
            costPerWeek = 110;
          }
        }
      
        // Calculate total cost per month
        var n = costPerWeek * 4 * 82.54;
      
        // Display total cost
        let totalCostPerMonth = n.toFixed(2);
        document.getElementById("totalCost").setAttribute('value', "Rs. " + totalCostPerMonth);
      }

    return(
        <>
        <Navbarhome/>
        <h2 className='mt-5 text-center' style={{color:"#0b5824"}}>Food Budgeting Calculator</h2>
        <div className="main">
             <form class="budget">
                <label htmlFor="familySize" className='me-3'>Family Size:</label>
                <input class="w-50" type="number" id="familySize" name="familySize" min={1} max={10} /><br /><br />
        
                <label htmlFor="dietaryNeeds" className='me-3'>Dietary Needs:</label>
                <select class="w-50" id="dietaryNeeds" name="dietaryNeeds">
                    <option value="standard">Standard</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                </select><br /><br />

                <button className="btnn" type="button" onClick={()=>calculate()}>Calculate</button><br /><br />
        
                <label htmlFor="totalCost" className='me-3'>Total Cost:</label>
                <input type="text" id="totalCost" name="totalCost" readOnly /><br /><br />
            </form>
            </div>
        </>
    )
}

export default budgeting;