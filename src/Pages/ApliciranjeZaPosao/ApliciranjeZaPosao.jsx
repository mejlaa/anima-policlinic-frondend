import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import "./aliciranjezaposao.scss";
import { TimePicker } from "antd";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ApliciranjeZaPosao = () => {
  const [doctorData, setDoctorData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    specialization: "",
    experience: "",
    feePerConsultation: "",
    timings: null,
  });

  const [validationArray, setValidationArray] = useState({
    firstName: true,
    lastName: true,
    email: true,
    phoneNumber: true,
    address: true,
    specialization: true,
    experience: true,
    feePerConsultation: true,
    timings: true,
  });

  const [validSubmit, setValidSubmit] = useState(false);

  const onChangeInput = (e) => {
    if (e.target.value !== "") {
      setValidationArray({
        ...validationArray,
        [e.target.name]: false,
      });
      setDoctorData({ ...doctorData, [e.target.name]: e.target.value });
    } else {
      setValidationArray({
        ...validationArray,
        [e.target.name]: true,
      });
    }
  };

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (doctorData.timings === null) {
      setValidationArray({
        ...validationArray,
        timings: true,
      });
    } else {
      setValidationArray({
        ...validationArray,
        timings: false,
      });
    }
  }, [doctorData.timings]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (validSubmit) {
        dispatch(showLoading());

        const response = await axios.post(
          "http://localhost:5000/api/user/doctor-apply",
          { ...doctorData, userId: user.id },
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        dispatch(hideLoading());

        if (response.data.success) {
          toast.success(response.data.massage);
          navigate("/");
        } else {
          console.log(response);
          toast.error(response.data.massage);
        }
        console.log(validSubmit);
      } else toast.error("Molimo vas ispunite sva polja");
    } catch (error) {
      dispatch(hideLoading());
      toast.error(response.data.massage);
      console.log(error);
    }
  };
  useEffect(() => {
    validateInputs();
  }, [validationArray]);
  const validateInputs = () => {
    validationArray.firstName ||
    validationArray.lastName ||
    validationArray.email ||
    validationArray.phoneNumber ||
    validationArray.address ||
    validationArray.specialization ||
    validationArray.experience ||
    validationArray.feePerConsultation ||
    validationArray.timings
      ? setValidSubmit(false)
      : setValidSubmit(true);
  };
  return (
    <div id="apliciranjeMain">
      <Navbar />
      <div className="formDiv">
        <h1>Apliciraj za posao</h1>
        <div className="formMiddleLine"></div>
        <div className="fieldAboveCenterLine">
          <div className="inputDiv">
            <label htmlFor="firstName">
              <p
                className={
                  validationArray.firstName ? "errorClass" : "correctClass"
                }
              >
                *Ime
              </p>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Ime"
              onChange={onChangeInput}
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="lastName">
              <p
                className={
                  validationArray.lastName ? "errorClass" : "correctClass"
                }
              >
                *Prezime
              </p>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Prezime"
              onChange={onChangeInput}
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="email">
              <p
                className={
                  validationArray.email ? "errorClass" : "correctClass"
                }
              >
                *Email
              </p>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={onChangeInput}
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="phoneNumber">
              <p
                className={
                  validationArray.phoneNumber ? "errorClass" : "correctClass"
                }
              >
                *Broj telefona
              </p>
            </label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Broj telefona"
              onChange={onChangeInput}
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="address">
              <p
                className={
                  validationArray.address ? "errorClass" : "correctClass"
                }
              >
                *Adresa
              </p>
            </label>
            <input
              type="text"
              name="address"
              placeholder="Adresa"
              onChange={onChangeInput}
            />
          </div>
        </div>
        <div className="formMiddleLine"></div>
        <div className="fieldBelowCenterLine">
          <div className="inputDiv">
            <label htmlFor="specialization">
              <p
                className={
                  validationArray.specialization ? "errorClass" : "correctClass"
                }
              >
                *Specijalizacija
              </p>
            </label>
            <input
              type="text"
              name="specialization"
              placeholder="Specijalizacija"
              onChange={onChangeInput}
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="experience">
              <p
                className={
                  validationArray.experience ? "errorClass" : "correctClass"
                }
              >
                *Godine iskustva
              </p>
            </label>
            <input
              type="number"
              name="experience"
              placeholder="Godine iskustva"
              onChange={onChangeInput}
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="feePerConsultation">
              <p
                className={
                  validationArray.feePerConsultation
                    ? "errorClass"
                    : "correctClass"
                }
              >
                *Cena pregleda
              </p>
            </label>
            <input
              type="text"
              name="feePerConsultation"
              placeholder="Cena pregleda"
              onChange={onChangeInput}
            />
          </div>
          <div className="timePickerDiv">
            <label htmlFor="experience">
              <p
                className={
                  validationArray.timings ? "errorClass" : "correctClass"
                }
              >
                *Radno vreme
              </p>
            </label>
            <TimePicker.RangePicker
              name="timings"
              placeholder={["Početka vremena", "Kraj vremena"]}
              size={"large"}
              onChange={(Time) => {
                const timeTemp = doctorData;
                timeTemp.timings = Time;
                setDoctorData({ ...timeTemp });
              }}
            />
          </div>
        </div>
        <div className="buttonDiv">
          <button onClick={handleSubmit}>Pošalji zahtev</button>
        </div>
      </div>
    </div>
  );
};
export default ApliciranjeZaPosao;
