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
import { useSelector } from "react-redux";
import ProtectedRoute from "./Components/protectedRoute";
import PublicRoute from "./Components/PublicRoute";
import Zakazivanje from "./Pages/Zakazivanje/Zakazivanje";
import ApliciranjeZaPosao from "./Pages/ApliciranjeZaPosao/ApliciranjeZaPosao";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <div id="appMain">
      <BrowserRouter>
        {loading && (
          <div className="loaderParent">
            <span className="loader"></span>
          </div>
        )}
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/zakazivanje"
            element={
              <PublicRoute>
                <Zakazivanje />
              </PublicRoute>
            }
          />
          <Route
            path="onama"
            element={
              <PublicRoute>
                <AboutUs />
              </PublicRoute>
            }
          />
          <Route
            path="usluge"
            element={
              <PublicRoute>
                <Usluge />
              </PublicRoute>
            }
          />
          <Route
            path="zahtevi"
            element={
              <ProtectedRoute>
                <Zahtevi />
              </ProtectedRoute>
            }
          />
          <Route
            path="doktori"
            element={
              <ProtectedRoute>
                <Doktori />
              </ProtectedRoute>
            }
          />
          <Route
            path="terapije"
            element={
              <ProtectedRoute>
                <Terapije />
              </ProtectedRoute>
            }
          />
          <Route
            path="korisnici"
            element={
              <ProtectedRoute>
                <Korisnici />
              </ProtectedRoute>
            }
          />
          <Route
            path="apliciranje"
            element={
              <ProtectedRoute>
                <ApliciranjeZaPosao />
              </ProtectedRoute>
            }
          />
          <Route
            path="adminprofil"
            element={
              <ProtectedRoute>
                <AdminProfil />
              </ProtectedRoute>
            }
          />
          <Route path="prijava" element={<Login />} />
          <Route path="registracija" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
