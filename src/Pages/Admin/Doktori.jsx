import React from "react";
import AdminNav from "./AdminNav";
import { useState } from "react";

const Doktori = () => {
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
  return (
    <div id="adminMain">
      <div className="WorkSpace">
        <AdminNav />
        <div className="ListeDiv">
          <div className="listaDoktora">
            <h1>Lista doktora</h1>
            <div className="DivForDoktorCards">
              {doctor.map((item, index) => {
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
        </div>
      </div>
    </div>
  );
};
export default Doktori;
