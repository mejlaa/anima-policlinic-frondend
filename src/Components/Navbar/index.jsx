import React, { useEffect } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const getData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/get-user-info-by-id",
        {}, //zbog cega nije bilo potrebno da payload bude prazan kod login i register rute
        //je l to zbog authMiddleweare??

        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
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
        <Link to={"/prijava"}>
          <button>
            <p>Prijavi se </p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
