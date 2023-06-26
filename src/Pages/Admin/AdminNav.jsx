import React from "react";
import { Link } from "react-router-dom";
import "./admin.scss";

const AdminNav = () => {
  return (
    <div className="WorkSpaceMeniDiv">
      <div className="AdminMeniTitle">
        <h3>Admin</h3>
        <p>Control panel</p>
      </div>
      <div className="WorkSpaceMeni">
        <Link className={"adminMeniLinks"} to={"/korisnici"}>
          <div className="elemOfMeni">
            <img src="userIcon.png" alt="icon" />
            Korisinici
          </div>
        </Link>
        <Link className={"adminMeniLinks"} to={"/doktori"}>
          <div className="elemOfMeni">
            <img src="userDoctorIcon.png" alt="icon" />
            Doktori
          </div>
        </Link>
        <Link className={"adminMeniLinks"} to={"/adminprofil"}>
          <div className="elemOfMeni">
            <img src="userAdminIcon.png" alt="icon" />
            Profil
          </div>
        </Link>
        <Link className={"adminMeniLinks"} to={"/zahtevi"}>
          <div className="elemOfMeni">
            <img
              className="zahteviIcon"
              src="userNotification.png"
              alt="icon"
            />
            Zahtevi
          </div>
        </Link>
        <Link className={"adminMeniLinks"} to={"/terapije"}>
          <div className="elemOfMeni">
            <img src="userTherapy.png" alt="icon" />
            Terapije
          </div>
        </Link>
        <div className="elemOfMeni">
          <img src="userLogoutIcon.png" alt="icon" />

          <p>Odjavi se</p>
        </div>
        <div className="elemOfMeniLink">
          <Link className={"adminLink"} to={"/usluge"}>
            Početna
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AdminNav;
