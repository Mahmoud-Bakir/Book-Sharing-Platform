import Post from "../../Components/Post";
import ProfileHeader from "../../Components/ProfileHeader";
import SideMenu from "../../Components/SideMenu";
import { useState,useEffect,useNavigate } from "react";
import axios from "axios";
const ProfilePage = ({test}) => {
    const defaultState = {
    }
    const [user,setUser] = useState(defaultState)
    const id= localStorage.getItem("id")
    const token = localStorage.getItem("token")

    const headers = {
      Authorization: `Bearer ${token}`
    };
    
    const params = {
      user_Id: id
    };
    useEffect(() => {
      async function getUser() {
        const response = await axios.get("http://127.0.0.1:8000/users/profile",{headers,params})
        const data = response.data
        setUser(data)
    }
    getUser()},[user])
  
    return (
        <>
          <SideMenu />
          {test ? (
            <ProfileHeader user={test} />
          ) : (
            <>
             <ProfileHeader user={user}/>
            </>
          )}
        </>
      );
}
export default ProfilePage;