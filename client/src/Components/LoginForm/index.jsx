import "../LoginForm/style.css";
import logo from "../../assets/instagram.svg";
import playstore from "../../assets/playstore.png";
import micosoft from "../../assets/microsoft.png";
import Partition from "../Partition";
import Button from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";

const LoginForm = () => {
  const navigater = useNavigate();
  const moveToRegisteration = () => navigater("/register");
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
      "http://localhost:8000/api/guest/login",
      data
    );
    window.localStorage.setItem("token", response.data.user.token);
    window.location.href = "http://localhost:3000/home";
    console.log(response.data.user.token);
  };
  return (
    <>
      <div className="login-form-container">
        <div className="logo-container">
          <img src={logo} alt="Instagram" />
        </div>

        <div className="part">
          <Partition
            Name={"email"}
            Itype={"email"}
            holder={"Phone number, username, or email"}
            value={data.email}
            onChange={handleDataChange}
          />
        </div>
        <div className="part">
          <Partition
            Name={"password"}
            Itype={"password"}
            holder={"Password"}
            value={data.password}
            onChange={handleDataChange}
          />
        </div>
        <Button name={"Log in"} onSubmit={handleLogin} />
        <p>OR</p>
        <a href="https://m.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fm.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%25221dbhpb01ddvxqddh8wp1fswmd711cf1w6634yyj1mj83xg16hy4ya%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D86236009-e30a-472d-83aa-b85190ee718b%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221dbhpb01ddvxqddh8wp1fswmd711cf1w6634yyj1mj83xg16hy4ya%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=touch&locale=en_GB&pl_dbl=0&refsrc=deprecated&_rdr">
          Log in with Facebook
        </a>
        <p className="forgot">Fogot Password?</p>
      </div>
      <div className="existing-container">
        <p>
          Don't have an account?{" "}
          <span onClick={moveToRegisteration}>Sign Up</span>
        </p>
      </div>
      <div className="get">
        <span>Get the app</span>
        <div className="stores">
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D985327B7-64EA-431A-BB2D-0AF9C99DE09E%26utm_campaign%3DsignupPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge">
            <img src={playstore} alt="playstore" className="play" />
          </a>
          <a href="">
            <img src={micosoft} alt="microsoft Store" className="micro" />
          </a>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
