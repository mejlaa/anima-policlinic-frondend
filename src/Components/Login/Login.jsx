import { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({});

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

    if (!userData.password) {
      setPasswordError("Potrebno je uneti šifru");
    } else if (userData.password.length < 8) {
      setPasswordError("Šifra mora imati više od 8 karaktera");
    } else {
      setPasswordError("");
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
      <h2>Prijavi se</h2>

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
          placeholder="Unesite šifru"
          name="password"
          onChange={onChangeInput}
        />

        <span>{passwordError}</span>
      </div>

      <button>Prijavi se</button>
    </form>
  );
};

export default Login;
