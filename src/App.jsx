import AboutUs from "./Pages/AboutUs/AboutUs";

import Usluge from "./Pages/Usluge/Usluge";
import Terapije from "./Pages/Admin/Terapije";
import Zahtevi from "./Pages/Admin/Zahtevi";
import Doktori from "./Pages/Admin/Doktori";
import Korisnici from "./Pages/Admin/Korisnici";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./globalElements.scss";
import AdminProfil from "./Pages/Admin/AdminProfil";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div id="appMain">
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="onama" element={<AboutUs />} />
          <Route path="usluge" element={<Usluge />} />
          <Route path="zahtevi" element={<Zahtevi />} />
          <Route path="terapije" element={<Terapije />} />
          <Route path="doktori" element={<Doktori />} />
          <Route path="korisnici" element={<Korisnici />} />
          <Route path="adminprofil" element={<AdminProfil />} />
          <Route path="prijava" element={<Login />} />
          <Route path="registracija" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
