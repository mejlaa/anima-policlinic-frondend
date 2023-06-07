import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="wrapper">
        <div className="logo">anima</div>
        <nav className="menu-item1">
          <ul>
            <li>
              <a href="#">Pocetna</a>
            </li>
            <li>
              <Link to={"/onama"}>O nama</Link>
            </li>
            <li>
              <Link to={"/usluge"}>Usluge</Link>
            </li>
            <li>
              <a href="#">Lekari</a>
            </li>

            <li>
              <a href="#">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="menu-item2">
        <Link className={"navLink"} to={"/korisnici"}>
          Kontrolna tabla
        </Link>

        <button>
          <a href="#">Prijavi se</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
