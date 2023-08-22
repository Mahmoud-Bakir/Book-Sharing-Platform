import "../LoginForm/style.css";
import Partition from "../Partition";
import Button from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo.png"

const RegisterForm = ({handleToggle}) => {
  const navigater = useNavigate();
  const moveToHome = () => navigater("/home");

  const defaultState = {
    first_name:"",
    last_name:"",
    email: "",
    password: "",
  };
  const [data, setData] = useState(defaultState);
  const handleDataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const handleRegister = async () => {
    const response = await axios.post(
      "http://localhost:8000/auth/register",
      data
    );
    window.localStorage.setItem("token", response.data.token);
    moveToHome()
    console.log(response.data.user.token);
  };
  return (
    <>
      <div className="login-form-container">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <div className="part">
          <Partition
            Name={"first_name"}
            Itype={"text"}
            holder={"please enter your first name"}
            lab={"First name"}
            value={data.email}
            onChange={handleDataChange}
          />
        </div>
        <div className="part">
          <Partition
            Name={"last_name"}
            Itype={"text"}
            holder={"Please enter your last name "}
            lab={"Last name"}
            value={data.password}
            onChange={handleDataChange}
          />
        </div>
        <div className="part">
          <Partition
            Name={"email"}
            Itype={"email"}
            holder={"please enter your Email"}
            lab={"Email"}
            value={data.email}
            onChange={handleDataChange}
          />
        </div>
        <div className="part">
          <Partition
            Name={"password"}
            Itype={"password"}
            holder={"Please enter your Password here"}
            lab={"Password"}
            value={data.password}
            onChange={handleDataChange}
          />
        </div>
        <Button name={"Register"} onSubmit={handleRegister} />
        <p>
          Already have an account?
          <span onClick={handleToggle}> Sign In</span>
        </p>
     </div> 
    </>
  );
};
export default RegisterForm;
