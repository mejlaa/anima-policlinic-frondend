import React from "react";
import AdminNav from "./AdminNav";
import { useState } from "react";
import "./admin.scss";

const Zahtevi = () => {
  const [user, setUser] = useState([
    {
      ime: "mirza salkovic",
      telefon: "0666417407",
      datum: "01.03.2023",
      email: "salkovic.mirza@gmail.com",
      dozvola: "Odobri",
    },
    {
      ime: "mirza salkovic",
      telefon: "0666417407",
      datum: "01.03.2023",
      email: "salkovic.mirza@gmail.com",
      dozvola: "Odobri",
    },
    {
      ime: "mirza salkovic",
      telefon: "0666417407",
      datum: "01.03.2023",
      email: "salkovic.mirza@gmail.com",
      dozvola: "Odobri",
    },
    {
      ime: "mirza salkovic",
      telefon: "0666417407",
      datum: "01.03.2023",
      email: "salkovic.mirza@gmail.com",
      dozvola: "Odobri",
    },
    {
      ime: "mirza salkovic",
      telefon: "0666417407",
      datum: "01.03.2023",
      email: "salkovic.mirza@gmail.com",
      dozvola: "Odobri",
    },
    {
      ime: "mirza salkovic",
      telefon: "0666417407",
      datum: "01.03.2023",
      email: "salkovic.mirza@gmail.com",
      dozvola: "Odobri",
    },
    {
      ime: "mirza salkovic",
      telefon: "0666417407",
      datum: "01.03.2023",
      email: "salkovic.mirza@gmail.com",
      dozvola: "Odobri",
    },
    {
      ime: "mirza salkovic",
      telefon: "0666417407",
      datum: "01.03.2023",
      email: "salkovic.mirza@gmail.com",
      dozvola: "Odobri",
    },
    {
      ime: "mirza salkovic",
      telefon: "0666417407",
      datum: "01.03.2023",
      email: "salkovic.mirza@gmail.com",
      dozvola: "Odobri",
    },
    {
      ime: "mirza salkovic",
      telefon: "0666417407",
      datum: "01.03.2023",
      email: "salkovic.mirza@gmail.com",
      dozvola: "Odobri",
    },
    {
      ime: "mirza salkovic",
      telefon: "0666417407",
      datum: "01.03.2023",
      email: "salkovic.mirza@gmail.com",
      dozvola: "Odobri",
    },
    {
      ime: "mirza salkovic",
      telefon: "0666417407",
      datum: "01.03.2023",
      email: "salkovic.mirza@gmail.com",
      dozvola: "Odobri",
    },
    {
      ime: "mirza salkovic",
      telefon: "0666417407",
      datum: "01.03.2023",
      email: "salkovic.mirza@gmail.com",
      dozvola: "Odobri",
    },
  ]);
  return (
    <div id="adminMain">
      <div className="WorkSpace">
        <AdminNav />
        <div className="ListeDiv">
          <div className="listaZahteva">
            <h1>Lista zahteva</h1>

            <div className="scrollDiv">
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>Ime</th>
                    <th>Broj Telefona</th>
                    <th>Email</th>
                    <th>Datum</th>
                    <th>Odobenje</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.ime}</td>
                        <td>{item.telefon}</td>
                        <td>{item.email}</td>
                        <td>{item.datum}</td>
                        <td>{item.dozvola}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Zahtevi;
