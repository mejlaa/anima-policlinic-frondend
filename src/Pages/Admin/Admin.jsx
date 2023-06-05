import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminNav from "./AdminNav";
import "./admin.scss";

const Admin = () => {
  const [prikaz, setPrikaz] = useState("korisnici");

  return (
    <div id="adminMain">
      <div className="WorkSpace">
        {/* <AdminNav /> */}
        <div className="ListeDiv"></div>
      </div>
    </div>
  );
};

export default Admin;
