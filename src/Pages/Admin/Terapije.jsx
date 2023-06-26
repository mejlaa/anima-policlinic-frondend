import React from "react";
import AdminNav from "./AdminNav";
import { useState } from "react";

const Terapije = () => {
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
  return (
    <div id="adminMain">
      <div className="WorkSpace">
        <AdminNav />
        <div className="ListeDiv">
          <div className="listaTerapija">
            <h1>Lista terapija</h1>
            <div className="DivForTherapyCards">
              {terapije.map((item, index) => {
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
        </div>
      </div>
    </div>
  );
};
export default Terapije;
