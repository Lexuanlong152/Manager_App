import LoginLayout from "./layout/LoginLayout";
import Dashboard from "./components/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import "./App.css";
// import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginLayout/>} />
        <Route path="/home" element= {<Dashboard />} />
      </Routes>

      <Routes>
        <Route path="/about" element ={<About />}/>
        <Route path="/contact" element ={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
