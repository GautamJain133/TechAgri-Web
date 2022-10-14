import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Reg from "./components/Registration";
import Company from "./components/Company";
import Farmer from "./components/Farmer";

function App() {
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
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />}/>
              <Route path="/registration" element={<Reg/>} />
              <Route path="/company" element={<Company/>} />
              <Route path="/farmer" element={<Farmer/>} />
            </Routes>
          </UserAuthContextProvider>
  );
}

export default App;
