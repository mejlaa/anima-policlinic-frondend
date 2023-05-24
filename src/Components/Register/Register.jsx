import { useEffect, useState } from "react";
import "./register.css";
const Register = () => {
  const [userData, setUserData] = useState({});

  const [fNameVal, setFNameVal] = useState("");
  const [lNameVal, setLNameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [pasVal, setPasVal] = useState("");
  const [confPaslVal, setConfPasVal] = useState("");
  //funkcija koja se poziva na submit
  const clck = (e) => {
    e.preventDefault();
  };
  //ovde se setuju poruke za validaciju preko useefect na promenu userData stejta
  useEffect(() => {
    //setovanje poruka za email
    if (!userData.email) {
      setEmailVal("Potrebno je da unesete Vašu email adresu");
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(userData.email)) {
      setEmailVal("Uneta eemail adresa nije validna");
    } else {
      setEmailVal("");
    }
    //setovanje poruka za ime
    if (!userData.fName) {
      setFNameVal("Potrebno je da unesete vaše ime");
    } else {
      setFNameVal("");
    }
    //setovanje poruka za prezime
    if (!userData.lName) {
      setLNameVal("Potrebno je da unesete vaše prezime");
    } else {
      setLNameVal("");
    }
    //setovanje poruka za password
    if (!userData.password) {
      setPasVal("Potrebno je uneti šifru");
    } else if (userData.password.length < 8) {
      setPasVal("Šifra mora imati više od 8 karaktera");
    } else {
      setPasVal("");
    }
    //setovanje poruka za comfirm password
    if (!userData.confirmPassword) {
      setConfPasVal("Potrebno je potvrditi šifru");
    } else if (userData.confirmPassword.length < 8) {
      setConfPasVal("Šifra potvrde mora imati više od 8 karaktera");
    } else if (userData.confirmPassword !== userData.password) {
      setConfPasVal("Šifre se ne poklapaju");
    } else {
      setConfPasVal("");
    }
  }, [userData]);
  return (
    //pocetak forme za logovanje
    <form onSubmit={clck}>
      <h2>Registruj svoj besplatni nalog</h2>

      <div>
        <div>
          {/* input za ime sa onclick funkcijom koja definise ime kao "fName" unutar stejta "userData" i dodeljuje joj vrednost inputa */}
          <input
            type="text"
            placeholder="Ime"
            onChange={(e) => {
              setUserData({
                ...userData,
                fName: e.target.value,
              });
            }}
          />
          <span>{fNameVal}</span>
        </div>
        <div>
          {/* input za prezime sa onclick funkcijom koja definise prezime kao "lName" unutar stejta "userData" i dodeljuje joj vrednost inputa */}
          <input
            type="text"
            placeholder="Prezime"
            onChange={(e) => {
              setUserData({
                ...userData,
                lName: e.target.value,
              });
            }}
          />
          <span>{lNameVal}</span>
        </div>
      </div>
      <div className="emailPasInputsDiv">
        {/* input za email sa onclick funkcijom koja definise email kao "email" unutar stejta "userData" i dodeljuje mu vrednost inputa */}
        <input
          type="email"
          placeholder="Email adresa"
          onChange={(e) => {
            setUserData({
              ...userData,
              email: e.target.value,
            });
          }}
        />
        <span>{emailVal}</span>
      </div>
      <div className="emailPasInputsDiv">
        {/* input za password sa onclick funkcijom koja definise password kao "password" unutar stejta "userData" i dodeljuje mu vrednost inputa */}
        <input
          type="password"
          placeholder="Kreiraj svoju šifru"
          onChange={(e) => {
            setUserData({
              ...userData,
              password: e.target.value,
            });
          }}
        />
        <span>{pasVal}</span>
      </div>
      <div className="emailPasInputsDiv">
        {/* input za confirm password sa onclick funkcijom koja definise confirm password kao "confirmPassword" unutar stejta "userData" i dodeljuje mu vrednost inputa */}
        <input
          type="password"
          placeholder="Potvrdi šifru"
          onChange={(e) => {
            setUserData({
              ...userData,
              confirmPassword: e.target.value,
            });
          }}
        />
        <span>{confPaslVal} </span>
      </div>
      <button>Register</button>
    </form>
  );
};

export default Register;
