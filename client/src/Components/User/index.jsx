import React from 'react'
import "../User/style.css"
import profile from "../../assets/profile.svg";


const User = ({first_name,last_name}) => {
  return (
    <div className='user-container'>
       <div className='user-container-img'>
       <img src={profile} alt="profile" />
       </div>
       <div className='details'>
       <span>{first_name}</span>
        <span> {last_name}</span>
       </div>
       
    </div>
  )
}

export default User