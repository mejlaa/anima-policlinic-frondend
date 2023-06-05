import React from "react";
import AdminNav from "./AdminNav";
import { useState } from "react";
import "./admin.scss";

const Korisnici = () => {
  const [korisnici, setKorisnici] = useState([
    {
      ime: "lara larisa",
      telefon: "064444544",
      email: "lara@lara.com",
      datum: "02.03.2023",
      status: "aktivan",
    },
    {
      ime: "lara larisa",
      telefon: "064444544",
      email: "lara@lara.com",
      datum: "02.03.2023",
      status: "aktivan",
    },
    {
      ime: "lara larisa",
      telefon: "064444544",
      email: "lara@lara.com",
      datum: "02.03.2023",
      status: "aktivan",
    },
    {
      ime: "lara larisa",
      telefon: "064444544",
      email: "lara@lara.com",
      datum: "02.03.2023",
      status: "aktivan",
    },
    {
      ime: "lara larisa",
      telefon: "064444544",
      email: "lara@lara.com",
      datum: "02.03.2023",
      status: "aktivan",
    },
    {
      ime: "lara larisa",
      telefon: "064444544",
      email: "lara@lara.com",
      datum: "02.03.2023",
      status: "aktivan",
    },
    {
      ime: "lara larisa",
      telefon: "064444544",
      email: "lara@lara.com",
      datum: "02.03.2023",
      status: "aktivan",
    },
    {
      ime: "lara larisa",
      telefon: "064444544",
      email: "lara@lara.com",
      datum: "02.03.2023",
      status: "aktivan",
    },
    {
      ime: "lara larisa",
      telefon: "064444544",
      email: "lara@lara.com",
      datum: "02.03.2023",
      status: "aktivan",
    },
    {
      ime: "lara larisa",
      telefon: "064444544",
      email: "lara@lara.com",
      datum: "02.03.2023",
      status: "aktivan",
    },
    {
      ime: "lara larisa",
      telefon: "064444544",
      email: "lara@lara.com",
      datum: "02.03.2023",
      status: "aktivan",
    },
  ]);
  return (
    <div id="adminMain">
      <div className="WorkSpace">
        <AdminNav />
        <div className="ListeDiv">
          <div className="listaKorisnika">
            <h1>Lista korisnika</h1>
            <div className="DivForUserCards">
              {korisnici.map((item, index) => {
                return (
                  <div key={index} className="userCard">
                    <div>
                      <p>
                        <strong>ime:</strong>{" "}
                      </p>
                      <p>{item.ime}</p>
                    </div>
                    <div>
                      <p>
                        <strong>email:</strong>{" "}
                      </p>
                      <p>{item.email}</p>
                    </div>
                    <div>
                      <p>
                        <strong> telefon:</strong>
                      </p>
                      <p>{item.telefon}</p>
                    </div>
                    <div>
                      <p>
                        <strong> datum:</strong>
                      </p>
                      <p>{item.datum}</p>
                    </div>
                    <div>
                      <p>
                        <strong>status:</strong>{" "}
                      </p>
                      <p>{item.status}</p>
                    </div>

                    <button>Izmeni</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Korisnici;
