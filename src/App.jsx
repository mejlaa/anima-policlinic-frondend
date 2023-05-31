
import "./App.css";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Admin from "./Pages/Admin/Admin";
import Footer from "./Components/Footer/Footer";
import Usluge from "./Pages/Usluge/Usluge";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="appMain">
      <BrowserRouter>
        <Routes>
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="/" element={<Usluge />} />
          <Route path="admin" element={<Admin />} />
        </Routes>

        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
