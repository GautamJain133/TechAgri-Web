function recommendFertilizer(
  cropType,
  soilType,
  nitrogen,
  phosphorus,
  potassium
) {
  let recommended_fertilizer = {};

  if (cropType === "corn") {
    if (soilType === "sandy loam") {
      if (nitrogen < 160 && phosphorus < 60 && potassium < 200) {
        recommended_fertilizer = {
          name: "NPK 20-10-10",
          type: "inorganic",
          application_method: "drilled",
          rate: "200 lbs/acre",
          price: "$40.00/bag",
        };
      } else if (nitrogen >= 160 && phosphorus < 60 && potassium >= 200) {
        recommended_fertilizer = {
          name: "NPK 20-10-10",
          type: "inorganic",
          application_method: "broadcast",
          rate: "200 lbs/acre",
          price: "$40.00/bag",
        };
      } else {
        recommended_fertilizer = {
          name: "Organic compost",
          type: "organic",
          application_method: "broadcast",
          rate: "2 tons/acre",
          price: "$50.00/ton",
        };
      }
    } else if (soilType == "clay loam") {
      if (nitrogen < 160 && phosphorus < 60 && potassium < 200) {
        recommended_fertilizer = {
          name: "NPK 18-10-10",
          type: "inorganic",
          application_method: "drilled",
          rate: "200 lbs/acre",
          price: "$45.00/bag",
        };
      } else if (nitrogen >= 160 && phosphorus < 60 && potassium >= 200) {
        recommended_fertilizer = {
          name: "NPK 18-10-10",
          type: "inorganic",
          application_method: "broadcast",
          rate: "200 lbs/acre",
          price: "$45.00/bag",
        };
      } else {
        recommended_fertilizer = {
          name: "Organic compost",
          type: "organic",
          application_method: "broadcast",
          rate: "2 tons/acre",
          price: "$50.00/ton",
        };
      }
    } else if (soilType == "silty loam") {
      if (nitrogen < 160 && phosphorus < 60 && potassium < 200) {
        recommended_fertilizer = {
          name: "NPK 18-10-10",
          type: "inorganic",
          application_method: "drilled",
          rate: "200 lbs/acre",
          price: "$45.00/bag",
        };
      } else if (nitrogen >= 160 && phosphorus < 60 && potassium >= 200) {
        recommended_fertilizer = {
          name: "NPK 18-10-10",
          type: "inorganic",
          application_method: "broadcast",
          rate: "200 lbs/acre",
          price: "$45.00/bag",
        };
      } else {
        recommended_fertilizer = {
          name: "Organic compost",
          type: "organic",
          application_method: "broadcast",
          rate: "2 tons/acre",
          price: "$50.00/ton",
        };
      }
    }
  } else if (cropType == "soybean") {
    if (soilType == "sandy loam") {
      if (nitrogen < 50 && phosphorus < 40 && potassium < 100) {
        recommended_fertilizer = {
          name: "NPK 16-20-0",
          type: "inorganic",
          application_method: "drilled",
          rate: "150 lbs/acre",
          price: "$35.00/bag",
        };
      } else if (nitrogen >= 50 && phosphorus < 40 && potassium >= 100) {
        recommended_fertilizer = {
          name: "NPK 16-20-0",
          type: "inorganic",
          application_method: "broadcast",
          rate: "150 lbs/acre",
          price: "$35.00/bag",
        };
      } else {
        recommended_fertilizer = {
          name: "Chicken manure",
          type: "organic",
          application_method: "broadcast",
          rate: "2 tons/acre",
          price: "$60.00/ton",
        };
      }
    } else if (soilType == "clay loam") {
      if (nitrogen < 50 && phosphorus < 40 && potassium < 100) {
        recommended_fertilizer = {
          name: "NPK 16-20-0",
          type: "inorganic",
          application_method: "drilled",
          rate: "150 lbs/acre",
          price: "$40.00/bag",
        };
      } else if (nitrogen >= 50 && phosphorus < 40 && potassium >= 100) {
        recommended_fertilizer = {
          name: "NPK 16-20-0",
          type: "inorganic",
          application_method: "broadcast",
          rate: "150 lbs/acre",
          price: "$40.00/bag",
        };
      } else {
        recommended_fertilizer = {
          name: "Chicken manure",
          type: "organic",
          application_method: "broadcast",
          rate: "2 tons/acre",
          price: "$60.00/ton",
        };
      }
    } else if (soilType == "silty loam") {
      if (nitrogen < 50 && phosphorus < 40 && potassium < 100) {
        recommended_fertilizer = {
          name: "NPK 16-20-0",
          type: "inorganic",
          application_method: "drilled",
          rate: "150 lbs/acre",
          price: "$40.00/bag",
        };
      } else if (nitrogen >= 50 && phosphorus < 40 && potassium >= 100) {
        recommended_fertilizer = {
          name: "NPK 16-20-0",
          type: "inorganic",
          application_method: "broadcast",
          rate: "150 lbs/acre",
          price: "$40.00/bag",
        };
      } else {
        recommended_fertilizer = {
          name: "Chicken manure",
          type: "organic",
          application_method: "broadcast",
          rate: "2 tons/acre",
          price: "$60.00/ton",
        };
      }
    }
  } else if (cropType == "wheat") {
    if (soilType == "sandy loam") {
      if (nitrogen < 80 && phosphorus < 40 && potassium < 80) {
        recommended_fertilizer = {
          name: "NPK 20-20-0",
          type: "inorganic",
          application_method: "drilled",
          rate: "200 lbs/acre",
          price: "$40.00/bag",
        };
      } else if (nitrogen >= 80 && phosphorus < 40 && potassium >= 80) {
        recommended_fertilizer = {
          name: "NPK 20-20-0",
          type: "inorganic",
          application_method: "broadcast",
          rate: "200 lbs/acre",
          price: "$40.00/bag",
        };
      } else {
        recommended_fertilizer = {
          name: "Organic compost",
          type: "organic",
          application_method: "broadcast",
          rate: "2 tons/acre",
          price: "$50.00/ton",
        };
      }
    } else if (soilType == "clay loam") {
      if (nitrogen < 80 && phosphorus < 40 && potassium < 80) {
        recommended_fertilizer = {
          name: "NPK 16-20-0",
          type: "inorganic",
          application_method: "drilled",
          rate: "200 lbs/acre",
          price: "$45.00/bag",
        };
      } else if (nitrogen >= 80 && phosphorus < 40 && potassium >= 80) {
        recommended_fertilizer = {
          name: "NPK 16-20-0",
          type: "inorganic",
          application_method: "broadcast",
          rate: "200 lbs/acre",
          price: "$45.00/bag",
        };
      } else {
        recommended_fertilizer = {
          name: "Organic compost",
          type: "organic",
          application_method: "broadcast",
          rate: "2 tons/acre",
          price: "$50.00/ton",
        };
      }
    } else if (soilType == "silty loam") {
      if (nitrogen < 80 && phosphorus < 40 && potassium < 80) {
        recommended_fertilizer = {
          name: "NPK 16-20-0",
          type: "inorganic",
          application_method: "drilled",
          rate: "200 lbs/acre",
          price: "$45.00/bag",
        };
      } else if (nitrogen >= 80 && phosphorus < 40 && potassium >= 80) {
        recommended_fertilizer = {
          name: "NPK 16-20-0",
          type: "inorganic",
          application_method: "broadcast",
          rate: "200 lbs/acre",
          price: "$45.00/bag",
        };
      } else {
        recommended_fertilizer = {
          name: "Organic compost",
          type: "organic",
          application_method: "broadcast",
          rate: "2 tons/acre",
          price: "$50.00/ton",
        };
      }
    }
  } else if (cropType === "maize") {
    if (soilType === "sandy loam") {
      if (nitrogen < 120 && phosphorus < 60 && potassium < 120) {
        recommended_fertilizer = {
          name: "NPK 20-20-0",
          type: "inorganic",
          application_method: "drilled",
          rate: "200 lbs/acre",
          price: "$40.00/bag",
        };
      } else if (nitrogen >= 120 && phosphorus < 60 && potassium >= 120) {
        recommended_fertilizer = {
          name: "NPK 20-20-0",
          type: "inorganic",
          application_method: "broadcast",
          rate: "200 lbs/acre",
          price: "$40.00/bag",
        };
      } else {
        recommended_fertilizer = {
          name: "Organic compost",
          type: "organic",
          application_method: "broadcast",
          rate: "3 tons/acre",
          price: "$50.00/ton",
        };
      }
    } else if (soilType === "clay loam") {
      if (nitrogen < 120 && phosphorus < 60 && potassium < 120) {
        recommended_fertilizer = {
          name: "NPK 16-20-0",
          type: "inorganic",
          application_method: "drilled",
          rate: "200 lbs/acre",
          price: "$45.00/bag",
        };
      } else if (nitrogen >= 120 && phosphorus < 60 && potassium >= 120) {
        recommended_fertilizer = {
          name: "NPK 16-20-0",
          type: "inorganic",
          application_method: "broadcast",
          rate: "200 lbs/acre",
          price: "$45.00/bag",
        };
      } else {
        recommended_fertilizer = {
          name: "Organic compost",
          type: "organic",
          application_method: "broadcast",
          rate: "3 tons/acre",
          price: "$50.00/ton",
        };
      }
    } else if (soilType === "silty loam") {
      if (nitrogen < 120 && phosphorus < 60 && potassium < 120) {
        recommended_fertilizer = {
          name: "NPK 16-20-0",
          type: "inorganic",
          application_method: "drilled",
          rate: "200 lbs/acre",
          price: "$45.00/bag",
        };
      } else if (nitrogen >= 120 && phosphorus < 60 && potassium >= 120) {
        recommended_fertilizer = {
          name: "NPK 16-20-0",
          type: "inorganic",
          application_method: "broadcast",
          rate: "200 lbs/acre",
          price: "$45.00/bag",
        };
      } else {
        recommended_fertilizer = {
          name: "Organic compost",
          type: "organic",
          application_method: "broadcast",
          rate: "3 tons/acre",
          price: "$50.00/ton",
        };
      }
    }
  }

  return recommended_fertilizer;
}
module.exports = recommendFertilizer;
