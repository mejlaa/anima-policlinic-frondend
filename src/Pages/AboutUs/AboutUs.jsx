import React from "react";
import Footer from "../../Components/Footer/Footer";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div id="AboutUsMain">
      <div className="oNamaImgDiv">
        <img className="FirstImgAboutUs" src="onama.jpg" alt="O nama" />
        <h1>O nama</h1>
      </div>

      <h1 className="naslov">Zašto mi?</h1>
      <div className="ZastoMiDiv">
        <div className="ZastoMiLeftDiv">
          <h2>Uvek smo spremni da pomognemo oko Vašeg problema</h2>
          <p>
            U okviru Poliklinike Anima plus obavlja se psihijatrijsko lečenje
            psihičkih poremećaja gde je pored biološke i socioterapije, poseban
            akcenat stavljen na psihoterapijski tretman kojim se osim kliničkog
            poboljšanja (gubitak simptoma) postiže restrukturacija i bolja
            adaptacija ličnosti kroz korektivno emocionalno iskustvo, što
            značajno poboljšava kvalitet i ispunjenost života i mogućnost
            usredsređenja na važne životne ciljeve. <br />
            <br />
            Pored psihoterapije i psihijatrijskih pregleda kod nas se obavljaju
            i pregledi iz neurologije dece i odraslih, EEG, kao i pregledi iz
            pedijatrije i neonatologije. <br />
            <br />
          </p>
          <h4 className="naslovRadnoVreme">
            RADNO VREME: <br />
            <br />
          </h4>
          <div className="radnoVremeZAstoMi">
            <div>
              <img src="corIconBlack.png" alt="cor" />
              <p>Pon/Pet:</p>
            </div>
            <p>
              <strong> 09:00 - 21:00</strong>
            </p>
          </div>
          <div className="radnoVremeZAstoMi">
            <div>
              <img src="corIconBlack.png" alt="cor" />
              <p>Subota:</p>
            </div>
            <p>
              <strong> 09:00 - 13:00</strong>
            </p>
          </div>
          <button>Kontaktiraj nas</button>
        </div>
        <img className="ZastoMiImg1" src="zastoMiImg.jpg" alt="slika" />
        <img className="ZastoMiImg2" src="zastoMiImg2.jpg" alt="slika" />
      </div>

      <div className="OurTeamDiv">
        <h1 className="naslov">Upoznajte naš tim</h1>
        <div className="drFiledDiv">
          <div className="drCard">
            <img className="imageOfDr" src="dr1.png" alt="Dr.Milena Jović" />
            <h3>Milena Jović</h3>
            <p>Neuropsihijatar, psihoterapeut</p>
          </div>
          <div className="drCard">
            <img className="imageOfDr" src="dr2.png" alt="Dr.Jovan Jeremeić" />
            <h3>Jovan Jeremeić </h3>
            <p>Psihijatar, psihoterapeut</p>
          </div>
          <div className="drCard">
            <img className="imageOfDr" src="dr3.png" alt="Dr.Omer Sadiković" />
            <h3>Omer Sadiković Jovan Jeremeić Milena Jović</h3>
            <p>Dečji i adolescentni neuropsihijatar</p>
          </div>
          <div className="drCard">
            <img className="imageOfDr" src="dr4.png" alt="Dr.Dragana Perla" />
            <h3>Dragana Perla</h3>
            <p>Psihijatar</p>
          </div>
        </div>
        <div className="ProfessionalStaffDiv">
          <h1 className="naslov">Stručno osoblje</h1>
          <div className="ProfessionalStaffImagesDiv">
            <img className="StaffImg" src="osoblje1.png" alt="o1" />
            <img className="StaffImg" src="osoblje2.png" alt="o1" />
            <img className="StaffImg" src="osoblje3.png" alt="o1" />
            <img className="StaffImg" src="osoblje4.png" alt="o1" />
            <img className="StaffImg" src="osoblje5.png" alt="o1" />
            <img className="StaffImg" src="osoblje6.png" alt="o1" />
            <img className="StaffImg" src="osoblje7.png" alt="o1" />
            <img className="StaffImg" src="Admin.png" alt="o1" />
          </div>
        </div>
        <button>Više o timu</button>
      </div>

      <div className="TerapyField">
        <h1 className="naslov">Usluge</h1>
        <div className="TherapyDiv">
          <a href="#">
            <div className="TerapyCard">
              <img src="psihoterapija-usluge.png" alt="slika" />
              <p>Psihoterapija</p>
            </div>
          </a>
          <a href="#">
            <div className="TerapyCard">
              <img src="psiholoski kabinet.png" alt="slika" />
              <p>Grupna analitička psihoterpija</p>
            </div>
          </a>
          <a href="#">
            <div className="TerapyCard">
              <img src="psihijatrijaDece.png" alt="slika" />
              <p>Porodična psihoanaliza</p>
            </div>
          </a>
          <a href="#">
            <div className="TerapyCard">
              <img src="pedagosko.png" alt="slika" />
              <p>Psihijatrija dece</p>
            </div>
          </a>
        </div>
        <button>Više o uslugama</button>
      </div>

      <div className="window">
        <div>
          <h1>Potražite stučnu praksu</h1>
          <p>Ne oklevajte da nas konsultujete o svom problemu</p>
          <button>Zakaži termin</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
