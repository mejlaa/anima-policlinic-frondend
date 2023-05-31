import React, { useState } from "react";
import "./admin.scss";

const Admin = () => {
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
  const [doctor, setDoctor] = useState([
    {
      ime: "Kanita Murselovic",
      opis: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ratione assumenda eveniet ea unde, quisquam architecto minus saepe voluptatum laborum! Nulla, earum sit consequuntur adipisci eum autem corrupti doloribus odio?",
      slika: "dr1.png",
      terapije: ["Psihoanaliza", "Decija psihijatrija"],
      id: 1,
    },
    {
      ime: "Kanita Murselovic",
      opis: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ratione assumenda eveniet ea unde, quisquam architecto minus saepe voluptatum laborum! Nulla, earum sit consequuntur adipisci eum autem corrupti doloribus odio?",
      slika: "dr1.png",
      terapije: ["Psihoanaliza", "Decija psihijatrija"],
      id: 1,
    },
    {
      ime: "Kanita Murselovic",
      opis: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ratione assumenda eveniet ea unde, quisquam architecto minus saepe voluptatum laborum! Nulla, earum sit consequuntur adipisci eum autem corrupti doloribus odio?",
      slika: "dr1.png",
      terapije: ["Psihoanaliza", "Decija psihijatrija"],
      id: 1,
    },
    {
      ime: "Kanita Murselovic",
      opis: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ratione assumenda eveniet ea unde, quisquam architecto minus saepe voluptatum laborum! Nulla, earum sit consequuntur adipisci eum autem corrupti doloribus odio?",
      slika: "dr1.png",
      terapije: ["Psihoanaliza", "Decija psihijatrija"],
      id: 1,
    },
    {
      ime: "Kanita Murselovic",
      opis: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ratione assumenda eveniet ea unde, quisquam architecto minus saepe voluptatum laborum! Nulla, earum sit consequuntur adipisci eum autem corrupti doloribus odio?",
      slika: "dr1.png",
      terapije: ["Psihoanaliza", "Decija psihijatrija"],
      id: 1,
    },
    {
      ime: "Kanita Murselovic",
      opis: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ratione assumenda eveniet ea unde, quisquam architecto minus saepe voluptatum laborum! Nulla, earum sit consequuntur adipisci eum autem corrupti doloribus odio?",
      slika: "dr1.png",
      terapije: ["Psihoanaliza", "Decija psihijatrija"],
      id: 1,
    },
    {
      ime: "Kanita Murselovic",
      opis: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ratione assumenda eveniet ea unde, quisquam architecto minus saepe voluptatum laborum! Nulla, earum sit consequuntur adipisci eum autem corrupti doloribus odio?",
      slika: "dr1.png",
      terapije: ["Psihoanaliza", "Decija psihijatrija"],
      id: 1,
    },
    {
      ime: "Kanita Murselovic",
      opis: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ratione assumenda eveniet ea unde, quisquam architecto minus saepe voluptatum laborum! Nulla, earum sit consequuntur adipisci eum autem corrupti doloribus odio?",
      slika: "dr1.png",
      terapije: ["Psihoanaliza", "Decija psihijatrija"],
      id: 1,
    },
    {
      ime: "Kanita Murselovic",
      opis: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ratione assumenda eveniet ea unde, quisquam architecto minus saepe voluptatum laborum! Nulla, earum sit consequuntur adipisci eum autem corrupti doloribus odio?",
      slika: "dr1.png",
      terapije: ["Psihoanaliza", "Decija psihijatrija"],
      id: 1,
    },
    {
      ime: "Kanita Murselovic",
      opis: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ratione assumenda eveniet ea unde, quisquam architecto minus saepe voluptatum laborum! Nulla, earum sit consequuntur adipisci eum autem corrupti doloribus odio?",
      slika: "dr1.png",
      terapije: ["Psihoanaliza", "Decija psihijatrija"],
      id: 1,
    },
    {
      ime: "Kanita Murselovic",
      opis: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ratione assumenda eveniet ea unde, quisquam architecto minus saepe voluptatum laborum! Nulla, earum sit consequuntur adipisci eum autem corrupti doloribus odio?",
      slika: "dr1.png",
      terapije: ["Psihoanaliza", "Decija psihijatrija"],
      id: 1,
    },
  ]);
  const [terapije, setTerapije] = useState([
    {
      slika: "decijaU1.jpg",
      ime: "Decija",
      opis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis fugit sint eum dolor illo perspiciatis, explicabo repellat facilis voluptatum qui sed, cum ipsa dolorem atque, rem maxime aspernatur! Nemo.",
      doktori: ["Omer Sadiković", "Ivan Pernar"],
    },
    {
      slika: "decijaU1.jpg",
      ime: "Decija",
      opis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis fugit sint eum dolor illo perspiciatis, explicabo repellat facilis voluptatum qui sed, cum ipsa dolorem atque, rem maxime aspernatur! Nemo.",
      doktori: ["Omer Sadiković", "Ivan Pernar"],
    },
    {
      slika: "decijaU1.jpg",
      ime: "Decija",
      opis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis fugit sint eum dolor illo perspiciatis, explicabo repellat facilis voluptatum qui sed, cum ipsa dolorem atque, rem maxime aspernatur! Nemo.",
      doktori: ["Omer Sadiković", "Ivan Pernar"],
    },
    {
      slika: "decijaU1.jpg",
      ime: "Decija",
      opis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis fugit sint eum dolor illo perspiciatis, explicabo repellat facilis voluptatum qui sed, cum ipsa dolorem atque, rem maxime aspernatur! Nemo.",
      doktori: ["Omer Sadiković", "Ivan Pernar"],
    },
    {
      slika: "decijaU1.jpg",
      ime: "Decija",
      opis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis fugit sint eum dolLorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis fugit sint eum dolLorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis fugit sint eum dolLorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis fugit sint eum dolLorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis fugit sint eum dolLorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis fugit sint eum dolLorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis fugit sint eum dolLorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis fugit sint eum dolLorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis fugit sint eum dolLorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis fugit sint eum dolor illo perspiciatis, explicabo repellat facilis voluptatum qui sed, cum ipsa dolorem atque, rem maxime aspernatur! Nemo.",
      doktori: ["Omer Sadiković", "Ivan Pernar"],
    },
    {
      slika: "decijaU1.jpg",
      ime: "Decija",
      opis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis fugit sint eum dolor illo perspiciatis, explicabo repellat facilis voluptatum qui sed, cum ipsa dolorem atque, rem maxime aspernatur! Nemo.",
      doktori: ["Omer Sadiković", "Ivan Pernar"],
    },
    {
      slika: "decijaU1.jpg",
      ime: "Decija",
      opis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis fugit sint eum dolor illo perspiciatis, explicabo repellat facilis voluptatum qui sed, cum ipsa dolorem atque, rem maxime aspernatur! Nemo.",
      doktori: ["Omer Sadiković", "Ivan Pernar"],
    },
    {
      slika: "decijaU1.jpg",
      ime: "Decija",
      opis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis fugit sint eum dolor illo perspiciatis, explicabo repellat facilis voluptatum qui sed, cum ipsa dolorem atque, rem maxime aspernatur! Nemo.",
      doktori: ["Omer Sadiković", "Ivan Pernar"],
    },
    {
      slika: "decijaU1.jpg",
      ime: "Decija",
      opis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis fugit sint eum dolor illo perspiciatis, explicabo repellat facilis voluptatum qui sed, cum ipsa dolorem atque, rem maxime aspernatur! Nemo.",
      doktori: ["Omer Sadiković", "Ivan Pernar"],
    },
    {
      slika: "decijaU1.jpg",
      ime: "Decija",
      opis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis fugit sint eum dolor illo perspiciatis, explicabo repellat facilis voluptatum qui sed, cum ipsa dolorem atque, rem maxime aspernatur! Nemo.",
      doktori: ["Omer Sadiković", "Ivan Pernar"],
    },
    {
      slika: "decijaU1.jpg",
      ime: "Decija",
      opis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis fugit sint eum dolor illo perspiciatis, explicabo repellat facilis voluptatum qui sed, cum ipsa dolorem atque, rem maxime aspernatur! Nemo.",
      doktori: ["Omer Sadiković", "Ivan Pernar"],
    },
  ]);
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
  //state za koji nosi podatke sa stranice koji mogu da se menjaju,ovo ce da bude globalna promenljiva
  const [value, setValue] = useState({
    admin: {},
  });

  const [prikaz, setPrikaz] = useState("korisnici");
  let u = user;
  let d = doctor;
  let t = terapije;
  let k = korisnici;

  return (
    <div id="adminMain">
      <div className="WorkSpace">
        {/* admin Meni ,leva strana*/}
        <div className="WorkSpaceMeniDiv">
          <div className="AdminMeniTitle">
            <h3>Admin</h3>
            <p>Control panel</p>
          </div>
          <div className="WorkSpaceMeni">
            <div
              className="elemOfMeni"
              onClick={() => {
                setPrikaz("korisnici");
              }}
            >
              <img src="userIcon.png" alt="icon" />
              <p>Korisnici</p>
            </div>
            <div
              className="elemOfMeni"
              onClick={() => {
                setPrikaz("doktori");
              }}
            >
              <img src="userDoctorIcon.png" alt="icon" />
              <p>Doktori</p>
            </div>
            <div
              className="elemOfMeni"
              onClick={() => {
                setPrikaz("profil");
              }}
            >
              <img
                src="userAdminIcon.png"
                alt="icon"
                onClick={() => {
                  setPrikaz("profil");
                }}
              />
              <p>Profil</p>
            </div>
            <div
              className="elemOfMeni"
              onClick={() => {
                setPrikaz("zahtevi");
              }}
            >
              <img
                className="zahteviIcon"
                src="userNotification.png"
                alt="icon"
              />
              <p>Zahtevi</p>
            </div>
            <div
              className="elemOfMeni"
              onClick={() => {
                setPrikaz("terapije");
              }}
            >
              <img src="userTherapy.png" alt="icon" />
              <p>Terapije</p>
            </div>
            <div className="elemOfMeni">
              <img src="userLogoutIcon.png" alt="icon" />
              <p>Odjavi se</p>
            </div>
          </div>
        </div>
        {/* desna strana za prikaz  */}
        <div className="ListeDiv">
          {prikaz === "korisnici" ? (
            <div className="listaKorisnika">
              <h1>Lista korisnika</h1>
              <div className="DivForUserCards">
                {k.map((item, index) => {
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
          ) : prikaz === "zahtevi" ? (
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
                    {u.map((item, index) => {
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
          ) : prikaz === "doktori" ? (
            <div className="listaDoktora">
              <h1>Lista doktora</h1>
              <div className="DivForDoktorCards">
                {d.map((item, index) => {
                  return (
                    <div key={index} className="doctorCard">
                      <img src={item.slika} />
                      <div className="rightFieldDoctorCard">
                        <h3>{item.ime}</h3>
                        <p>{item.opis}</p>
                        <div className="DoctorCardTherapy">
                          <strong>Terapije:</strong>
                          <div>
                            {item.terapije.map((i, index) => {
                              return <p key={index}>{i}</p>;
                            })}
                          </div>
                        </div>
                        <button>Izmeni</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : prikaz === "terapije" ? (
            <div className="listaTerapija">
              <h1>Lista terapija</h1>
              <div className="DivForTherapyCards">
                {t.map((item, index) => {
                  return (
                    <div key={index} className="therapyCard">
                      <img src={item.slika} />

                      <div className="rightFieldTherpyCard">
                        <h3>{item.ime}</h3>
                        <p>{item.opis}</p>
                        <div className="therapyCardDoctors">
                          <strong>Doktori:</strong>
                          <div>
                            {item.doktori.map((i, index) => {
                              return <p key={index}>{i}</p>;
                            })}
                          </div>
                        </div>
                        <button>Izmeni</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : prikaz === "profil" ? (
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
                  <h2> Mirela Ličina </h2>
                  <div>
                    <img className="editIcon" src="edit.png" />
                    <p>edit</p>
                  </div>
                </div>
                <div className="otherInfo">
                  <h4>
                    <strong>Email:</strong> admin1@gmail.com
                  </h4>
                  <div>
                    <img className="editIcon" src="edit.png" />
                    <p>edit</p>
                  </div>
                </div>
                <div className="otherInfo">
                  <h4>
                    <strong>Šifra:</strong> Admin1232
                  </h4>
                  <div>
                    <img className="editIcon" src="edit.png" />
                    <p>edit</p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {/**/}
        </div>
      </div>
    </div>
  );
};

export default Admin;
