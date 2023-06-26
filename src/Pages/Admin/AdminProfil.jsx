import React from "react";
import AdminNav from "./AdminNav";
import { useState } from "react";
import "./admin.scss";

const AdminProfil = () => {
  const [admiPersonalInformations, setAdmiPersonalInformations] = useState({
    ime: "Mejla Ugljanin",
    email: "mejla.u@gmail.com",
    sifra: "014asdasx43",
  });
  return (
    <div id="adminMain">
      <div className="WorkSpace">
        <AdminNav />
        <div className="ListeDiv">
          <div className="AdminProfil">
            <div className="adminImgDiv">
              <img className="AdminProfilimg" src="Admin.png" />
              <div className="editImgDiv">
                <img className="editIcon" src="editWhite.png" />
                <p>edit</p>
              </div>
            </div>
            <div className="adminInfo">
              <div className="adminName">
                <div></div>
                <h2> {admiPersonalInformations.ime} </h2>
                <div>
                  <img className="editIcon" src="edit.png" />
                  <p>edit</p>
                </div>
              </div>
              <div className="otherInfo">
                <h4>
                  <strong>Email:</strong> {admiPersonalInformations.email}
                </h4>
                <div>
                  <img className="editIcon" src="edit.png" />
                  <p>edit</p>
                </div>
              </div>
              <div className="otherInfo">
                <h4>
                  <strong>Šifra:</strong> {admiPersonalInformations.sifra}
                </h4>
                <div>
                  <img className="editIcon" src="edit.png" />
                  <p>edit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminProfil;
