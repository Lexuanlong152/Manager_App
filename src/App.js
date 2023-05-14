import LoginLayout from "./layout/LoginLayout";
import Dashboard from "./components/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectRouter";
// import Login from "./components/Login";
// import UnAuthorize from "./pages/UnAthorize";
import { useContext } from "react";
import { AuthContext } from "./store";

function App() {
  

  const auth= useContext(AuthContext).auth;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginLayout  />} />
      </Routes>
      
      <ProtectedRoute auth={auth}>
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </ProtectedRoute>
    </BrowserRouter>
  );
}

export default App;
