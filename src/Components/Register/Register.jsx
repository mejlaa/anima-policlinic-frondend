import { useState } from "react";
import "./register.scss";
const Register = () => {
  const [userData, setUserData] = useState({});

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const clck = (e) => {
    e.preventDefault();
  };

  const validateInputs = () => {
    if (!userData.email) {
      setEmailError("Potrebno je da unesete Vašu email adresu");
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(userData.email)) {
      setEmailError("Uneta eemail adresa nije validna");
    } else {
      setEmailError("");
    }

    if (!userData.fName) {
      setFirstNameError("Potrebno je da unesete vaše ime");
    } else {
      setFirstNameError("");
    }

    if (!userData.lName) {
      setLastNameError("Potrebno je da unesete vaše prezime");
    } else {
      setLastNameError("");
    }

    if (!userData.password) {
      setPasswordError("Potrebno je uneti šifru");
    } else if (userData.password.length < 8) {
      setPasswordError("Šifra mora imati više od 8 karaktera");
    } else {
      setPasswordError("");
    }

    if (!userData.confirmPassword) {
      setConfirmPasswordError("Potrebno je potvrditi šifru");
    } else if (userData.confirmPassword.length < 8) {
      setConfirmPasswordError("Šifra potvrde mora imati više od 8 karaktera");
    } else if (userData.confirmPassword !== userData.password) {
      setConfirmPasswordError("Šifre se ne poklapaju");
    } else {
      setConfirmPasswordError("");
    }
  };

  const onChangeInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    validateInputs();
  };

  return (
    <form onSubmit={clck}>
      <h2>Registruj svoj besplatni nalog</h2>

      <div>
        <div>
          <input
            type="text"
            placeholder="Ime"
            name="firstName"
            onChange={onChangeInput}
          />

          <span>{firstNameError}</span>
        </div>

        <div>
          <input
            type="text"
            placeholder="Prezime"
            name="lastName"
            onChange={onChangeInput}
          />

          <span>{lastNameError}</span>
        </div>
      </div>
      <div className="emailPasInputsDiv">
        <input
          type="email"
          placeholder="Email adresa"
          name="email"
          onChange={onChangeInput}
        />

        <span>{emailError}</span>
      </div>
      <div className="emailPasInputsDiv">
        <input
          type="password"
          placeholder="Kreiraj svoju šifru"
          name="password"
          onChange={onChangeInput}
        />

        <span>{passwordError}</span>
      </div>
      <div className="emailPasInputsDiv">
        <input
          type="password"
          placeholder="Potvrdi šifru"
          name="confirmPassword"
          onChange={onChangeInput}
        />

        <span>{confirmPasswordError}</span>
      </div>
      <button>Register</button>
    </form>
  );
};

export default Register;
