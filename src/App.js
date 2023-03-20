import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
//import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Reg from "./components/Registration";
import Company from "./components/Company";
import Farmer from "./components/Farmer";
import Cropform from "./components/Cropform";
import Gautam from "./components/Gautam";

import Directions from "./components/Directions";

import Budgeting from "./components/Budgeting";
import Volunteering from "./components/VolunteeringPage";

// import { useUserAuth } from "./context/UserAuthContext";
// import axios from "axios";

function App() {
  // const { user } = useUserAuth();
  // const createToken = async () => {
  //   const token = user && (await user.getIdToken());

  //   const payloadHeader = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "x-auth-token": `${token}`,
  //     },
  //   };
  //   return payloadHeader;
  // };

  return (
    <UserAuthContextProvider>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element=/*{check === 3 ? <Home /> : <Navigate replace to={"hello"} />*/ <Home />
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Reg />} />
        <Route path="/company" element={<Company />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/cropform" element={<Cropform />} />

        <Route path="/directions" element={<Directions />} />
        <Route path="/fertilizer" element={<Gautam />} />

        <Route path="/budgeting" element={<Budgeting />} />

        <Route path="/Volunteering" element={<Volunteering />} />
        <Route path="*" element={<Reg />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
