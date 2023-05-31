import React from "react";

import "./style.scss";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="wrapper">
        <div className="logo">anima</div>
        <nav className="menu-item1">
          <ul>
            <li>
              <a href="#">Početna</a>
            </li>
            <li>
              <a href="#">O nama</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="menu-item2">
        <button>
          <a href="#">Prijavi se</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
