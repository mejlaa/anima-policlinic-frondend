import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const Login = () => {
  const [userData, setUserData] = useState({});

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [validSubmit, setValidSubmit] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (validSubmit) {
        console.log(userData);
        const response = await axios.post(
          "http://localhost:5000/api/user/login",
          userData
        );

        if (response.data.success) {
          console.log(response);
          toast.success(response.data.massage);
          localStorage.setItem("token", response.data.data);
        } else {
          console.log(response);
          toast.error(response.data.massage);
        }
      } else toast.error("Molimo vas unesite ispravne podatke");
    } catch (error) {
      toast.error(response.data.massage);
      console.log(error);
    }
  };

  const validateInputs = () => {
    let valid = true;
    if (!userData.email) {
      setEmailError("Potrebno je da unesete Vašu email adresu");
      valid = false;
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(userData.email)) {
      setEmailError("Uneta email adresa nije validna");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!userData.password || userData.password === "") {
      setPasswordError("Potrebno je uneti šifru");
      valid = false;
    } else if (userData.password.length < 8) {
      setPasswordError("Šifra mora imati više od 8 karaktera");
      valid = false;
    } else {
      setPasswordError("");
    }
    valid ? setValidSubmit(true) : setValidSubmit(false);
  };

  const onChangeInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    validateInputs();
  };
  useEffect(() => {
    validateInputs();
  }, [userData]);
  return (
    <form onSubmit={handleSubmit}>
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
      <Link to={"/registracija"}>Napravi svoj nalog</Link>
    </form>
  );
};

export default Login;
