import { useEffect, useState } from "react";
import profile from "../../assets/profile.svg";
import "./style.css";
import "../ProfileHeader/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfileHeader = () => {
  const defaultState = {

  }
  const [user,setUser] = useState(defaultState)
  const id= localStorage.getItem("id")
  const token = localStorage.getItem("token")
  const navigater = useNavigate()
  const logout = () => navigater("/");

  const handleLogout =  () => {
    localStorage.clear()
    logout()
  }
  const headers = {
    Authorization: `Bearer ${token}`
  };
  
  const params = {
    user_Id: id
  };
  useEffect(() => {
    async function getUser() {
      try{
      const response = await axios.get("http://127.0.0.1:8000/users/profile",{headers,params})
      const data = response.data
      
      setUser(data)
      }catch(e){
        console.log(e)
      }
  }
  getUser()},[])

  return (
    <>
      <div className="profile-head">
        <div className="profile-image">
          <img src={profile} alt="" />
        </div>
        <div className="details-container"> 
        <div className="profile-details">
          <span>{user.first_name} {user.last_name}</span>
          </div>  
          <div className="profile-details">
            <span>Posts : {user.books.length}</span>
            <span>Followers : {user.followers.length} </span>
            <span>Following : {user.following.length} </span>
          </div>
          <div className="profile-details">
            <button className="button-profile" onClick={handleLogout}>
              Sign out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileHeader;
