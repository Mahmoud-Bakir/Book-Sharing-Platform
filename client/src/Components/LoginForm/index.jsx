import "../LoginForm/style.css";
import Partition from "../Partition";
import Button from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo.png"

const LoginForm = ({handleToggle}) => {
  const navigater = useNavigate();
  const moveToHome = () => navigater("/home");

  const defaultState = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(defaultState);
  const handleDataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const handleLogin = async () => {
    const response = await axios.post(
      "http://localhost:8000/auth/login",
      data
    );
    window.localStorage.setItem("token", response.data.user.token);
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
            holder={"Please enter your Password"}
            lab={"Password"}
            value={data.password}
            onChange={handleDataChange}
          />
        </div>
        <Button name={"Log in"} onSubmit={handleLogin} />
        <p>
          Don't have an account?
          <span onClick={handleToggle}> Sign Up</span>
        </p>
     </div> 
    </>
  );
};
export default LoginForm;
