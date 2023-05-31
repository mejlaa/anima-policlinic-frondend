import React, { useState } from "react";
import "./usluge.scss";
const Usluge = () => {
  const [psihoterapije, setPsihoterapije] = useState([
    {
      ime: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis.",
      slika: "psihoU1.jpg",
      lekari: ["Dr.Dragana Perla", "Dr.Omer Sadiković"],
    },
    {
      ime: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis.",
      slika: "psihoU2.jpg",
      lekari: ["Dr.Jovan Jeremeić", "Dr.Milena Jović"],
    },
    {
      ime: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis.",
      slika: "psihoU3.jpg",
      lekari: ["Dr.Dragana Perla", "Dr.Jovan Jeremeić"],
    },
    {
      ime: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis.",
      slika: "psihoU4.jpg",
      lekari: ["Dr.Omer Sadiković", "Dr.Milena Jović"],
    },
  ]);

  const [grupnaAnalitičkaPsihoterpija, setGrupnaAnalitičkaPsihoterpija] =
    useState([
      {
        ime: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis.",
        slika: "grupnaU1.jpg",
        lekari: ["Dr.Dragana Perla", "Dr.Omer Sadiković"],
      },
      {
        ime: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis.",
        slika: "grupnaU2.jpg",
        lekari: ["Dr.Omer Sadiković", "Dr.Milena Jović"],
      },
      {
        ime: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis.",
        slika: "grupnaU3.jpg",
        lekari: ["Dr.Dragana Perla", "Dr.Jovan Jeremeić"],
      },
      {
        ime: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis.",
        slika: "grupnaU4.jpg",
        lekari: ["Dr.Jovan Jeremeić", "Dr.Milena Jović"],
      },
    ]);

  const [porodičnaPsihoanaliza, setPorodičnaPsihoanaliza] = useState([
    {
      ime: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis.",
      slika: "porodicnaU1.jpg",
      lekari: ["Dr.Jovan Jeremeić", "Dr.Milena Jović"],
    },
    {
      ime: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis.",
      slika: "porodicnaU2.jpg",
      lekari: ["Dr.Dragana Perla", "Dr.Jovan Jeremeić"],
    },
    {
      ime: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis.",
      slika: "porodicnaU3.jpg",
      lekari: ["Dr.Omer Sadiković", "Dr.Milena Jović"],
    },
    {
      ime: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis.",
      slika: "porodicnaU4.jpg",
      lekari: ["Dr.Dragana Perla", "Dr.Omer Sadiković"],
    },
  ]);

  const [psihijatrijaDece, setPsihijatrijaDeceDiv] = useState([
    {
      ime: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis.",
      slika: "decijaU1.jpg",
      lekari: ["Dr.Omer Sadiković", "Dr.Milena Jović"],
      age: 30,
    },
    {
      ime: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis.",
      slika: "decijaU2.jpg",
      lekari: ["Dr.Dragana Perla", "Dr.Omer Sadiković"],
      age: 25,
    },
    {
      ime: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis.",
      slika: "decijaU3.jpg",
      lekari: ["Dr.Jovan Jeremeić", "Dr.Milena Jović"],
      age: 20,
    },
    {
      ime: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut totam quod a non, natus laborum praesentium libero hic beatae dolorem fugit sunt consectetur? Id amet voluptas dignissimos velit nobis.",
      slika: "decijaU4.jpg",
      lekari: ["Dr.Dragana Perla", "Dr.Jovan Jeremeić"],
      age: 48,
    },
  ]);

  const [lekari, setLekari] = useState([
    "Dr.Dragana Perla",
    "Dr.Omer Sadiković",
    "Dr.Jovan Jeremeić",
    "Dr.Milena Jović",
    "Dr.Milena Jović",
    "Dr.Milena Jović",
    "Dr.Milena Jović",
    "Dr.Kanita Murselović",
    "Dr.Milena Jović",
    "Dr.Kanita Murselović",
    "Dr.Kanita Murselović",
    "Dr.Kanita Murselović",
    "Dr.Kanita Murselović",
    "Dr.Kanita Murselović",
    "Dr.Kanita Murselović",
    "Dr.Kanita Murselović",
    "Dr.Kanita Murselović",
    "Dr.Kanita Murselović",
    "Dr.Kanita Murselović",
    "Dr.Kanita Murselović",
    "Dr.Kanita Murselović",
    "Dr.Kanita Murselović",
  ]);

  const [dropDownClick, setDropDownClick] = useState(false);

  const [filterSelec, setFilterSelec] = useState("");

  lekari;
  let psihoterapijeFiltered = psihoterapije;
  let grupnaAnalitičkaPsihoterpijaFiltered = grupnaAnalitičkaPsihoterpija;
  let porodičnaPsihoanalizaFiltered = porodičnaPsihoanaliza;
  let psihijatrijaDeceFiltered = psihijatrijaDece;

  psihoterapijeFiltered = filterSelec
    ? psihoterapije.filter((item) => item.lekari.includes(filterSelec))
    : psihoterapije;
  grupnaAnalitičkaPsihoterpijaFiltered = filterSelec
    ? grupnaAnalitičkaPsihoterpija.filter((item) =>
        item.lekari.includes(filterSelec)
      )
    : grupnaAnalitičkaPsihoterpija;
  porodičnaPsihoanalizaFiltered = filterSelec
    ? porodičnaPsihoanaliza.filter((item) => item.lekari.includes(filterSelec))
    : porodičnaPsihoanaliza;
  psihijatrijaDeceFiltered = filterSelec
    ? psihijatrijaDece.filter((item) => item.lekari.includes(filterSelec))
    : psihijatrijaDece;
  // filterSelec === "Svi lekari"
  //   ? (grupnaAnalitičkaPsihoterpijaFiltered = grupnaAnalitičkaPsihoterpija)
  //   : (grupnaAnalitičkaPsihoterpijaFiltered =
  //       grupnaAnalitičkaPsihoterpija.filter((item) =>
  //         item.lekari.includes(filterSelec)
  //       ));
  // filterSelec === "Svi lekari"
  //   ? (porodičnaPsihoanalizaFiltered = porodičnaPsihoanaliza)
  //   : (porodičnaPsihoanalizaFiltered = porodičnaPsihoanaliza.filter((item) =>
  //       item.lekari.includes(filterSelec)
  //     ));
  // filterSelec === "Svi lekari"
  //   ? (psihijatrijaDeceFiltered = psihijatrijaDece)
  //   : (psihijatrijaDeceFiltered = psihijatrijaDece.filter((item) =>
  //       item.lekari.includes(filterSelec)
  //     ));

  return (
    <div id="uslugeMain">
      <div className="prvaSlikaUslugeDiv">
        <img src="uslugePrva.jpg" alt="aaa" />
        <h1>Usluge</h1>
      </div>

      <div className="TherapyClasses">
        <a href="#PsihoterapijeDiv">
          <div className="TerapyClassCard">
            <img src="psihoterapija-usluge.png" alt="slika" />
            <p>Psihoterapija</p>
          </div>
        </a>
        <a href="#GrupnaAnalitičkaPsihoterpijaDiv">
          <div className="TerapyClassCard">
            <img src="psiholoski kabinet.png" alt="slika" />
            <p>Grupna analitička psihoterpija</p>
          </div>
        </a>
        <a href="#PorodičnaPsihoanalizaDiv">
          <div className="TerapyClassCard">
            <img src="psihijatrijaDece.png" alt="slika" />
            <p>Porodična psihoanaliza</p>
          </div>
        </a>
        <a href="#PsihijatrijaDeceDiv">
          <div className="TerapyClassCard">
            <img src="pedagosko.png" alt="slika" />
            <p>Psihijatrija dece</p>
          </div>
        </a>
      </div>

      <div className="filterDiv">
        <div className="filterDivText">
          <p>
            U cilju poboljšanja i unapredjenja usluge, naša stanica vam nudi
            filtriranje terapija prema lekarima koji ih vode. <br />{" "}
            <strong>Ukoliko želite da izaberete željenog lekara </strong>
            koristite filter koji se nalazi u okviru ovog polja.
          </p>
        </div>
        <div className="FilterLekariDropDown">
          <h4>Filter:</h4>
          <div
            onClick={() => {
              setDropDownClick(!dropDownClick);
              console.log(dropDownClick);
            }}
            className="dropDownFirstField"
          >
            <p>{filterSelec === "" ? "Svi lekari" : filterSelec}</p>

            <img src={dropDownClick ? "up.png" : "down.png"} alt="icon" />
          </div>
          <div className="DropDownScrollDiv">
            {dropDownClick ? (
              <div
                onClick={() => {
                  setFilterSelec("");
                  setDropDownClick(!dropDownClick);
                }}
              >
                <p>Svi lekari</p>
              </div>
            ) : null}
            {dropDownClick
              ? lekari.map((item, index) => {
                  return (
                    <div
                      onClick={() => {
                        setFilterSelec(item);
                        setDropDownClick(!dropDownClick);
                      }}
                      key={index}
                    >
                      <p>{item}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>

      <div id="PsihoterapijeDiv">
        <h1 className="naslovUsluge">Psihoterapija</h1>

        {psihoterapijeFiltered.map((item, index) => {
          return (
            <div
              key={index}
              className={index % 2 == 0 ? "TerapyCard" : "TerapyCardInverse"}
            >
              <div className="TerapyCardText">
                <h2>{item.ime}</h2>
                <p>{item.text}</p>
                <div className="lekariTerapije">
                  <h4>
                    <strong>Lekari:</strong>
                  </h4>
                  <div>
                    {item.lekari.map((i, index) => {
                      return (
                        <p key={index}>
                          {i}
                          {index < item.lekari.length - 1 ? "," : null}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="TerapyCardImg">
                <img className="therapyImg" src={item.slika} />
                <div className="grayBackgroundDiv"></div>
              </div>
            </div>
          );
        })}
      </div>

      <div id="GrupnaAnalitičkaPsihoterpijaDiv">
        <h1 className="naslovUsluge">Grupna analitička psihoterpija</h1>
        {grupnaAnalitičkaPsihoterpijaFiltered.map((item, index) => {
          return (
            <div
              key={index}
              className={index % 2 == 0 ? "TerapyCard" : "TerapyCardInverse"}
            >
              <div className="TerapyCardText">
                <h2>{item.ime}</h2>
                <p>{item.text}</p>
                <div className="lekariTerapije">
                  <h4>
                    <strong>Lekari:</strong>
                  </h4>
                  <div>
                    {item.lekari.map((i, index) => {
                      return (
                        <p key={index}>
                          {i}
                          {index < item.lekari.length - 1 ? "," : null}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="TerapyCardImg">
                <img className="therapyImg" src={item.slika} />
                <div className="grayBackgroundDiv"></div>
              </div>
            </div>
          );
        })}
      </div>

      <div id="PorodičnaPsihoanalizaDiv">
        <h1 id="naslovUsluge">Porodična psihoanaliza</h1>
        {porodičnaPsihoanalizaFiltered.map((item, index) => {
          return (
            <div
              key={index}
              className={index % 2 == 0 ? "TerapyCard" : "TerapyCardInverse"}
            >
              <div className="TerapyCardText">
                <h2>{item.ime}</h2>
                <p>{item.text}</p>
                <div className="lekariTerapije">
                  <h4>
                    <strong>Lekari:</strong>
                  </h4>
                  <div>
                    {item.lekari.map((i, index) => {
                      return (
                        <p key={index}>
                          {i}
                          {index < item.lekari.length - 1 ? "," : null}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="TerapyCardImg">
                <img className="therapyImg" src={item.slika} />
                <div className="grayBackgroundDiv"></div>
              </div>
            </div>
          );
        })}
      </div>

      <div id="PsihijatrijaDeceDiv">
        <h1 className="naslovUsluge">Psihijatrija dece</h1>
        {psihijatrijaDeceFiltered.map((item, index) => {
          return (
            <div
              key={index}
              className={index % 2 == 0 ? "TerapyCard" : "TerapyCardInverse"}
            >
              <div className="TerapyCardText">
                <h2>{item.ime}</h2>
                <p>{item.text}</p>
                <div className="lekariTerapije">
                  <h4>
                    <strong>Lekari:</strong>
                  </h4>
                  <div>
                    {item.lekari.map((i, index) => {
                      return (
                        <p key={index}>
                          {i}
                          {index < item.lekari.length - 1 ? "," : null}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="TerapyCardImg">
                <img className="therapyImg" src={item.slika} />
                <div className="grayBackgroundDiv"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Usluge;
