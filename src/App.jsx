import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import EmployeeProfilePage from "./pages/EmployeeProfilePage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<EmployeeDashboard />} />
          <Route path="/employee/:id" element={<EmployeeProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
