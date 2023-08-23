import React, { useEffect } from 'react'
import "../User/style.css"
import profile from "../../assets/profile.svg";
import { useState } from 'react';
import axios from 'axios';


const User = ({ first_name, last_name, check, id, follow,handleFollow }) => {
  const user_id = localStorage.getItem("id")
  const token = localStorage.getItem('token');
  const [following, setFollowing] = useState(follow);
  const data= {
    user_id:user_id,
    follower_id:id
  }

  const handleButtonClick = async () => {
    if (following==false){
      console.log(data)
      try{

        const response = await axios.post(
          'http://127.0.0.1:8000/users/follow',
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
      )
      setFollowing(!following);
      }catch(e){
        console.log(e)
      }
     
  }  
  };

  return (
    <div className='user-container'>
      <div className='user-container-img'>
        <img src={profile} alt="profile" />
      </div>
      <div className='details' onClick={() => check(id)}>
        <span>{first_name}</span>
        <span> {last_name}</span>
      </div>
      <button onClick={handleButtonClick} className='follow'>{following ? 'Unfollow' : 'Follow'}</button>
        
    </div>
  );
};

export default User