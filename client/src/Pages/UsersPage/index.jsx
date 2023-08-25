import React from 'react'
import "./style.css"
import Users from '../../Components/Users'
import SideMenu from '../../Components/SideMenu'

const UsersPage = () => {
  return (
    <>
     <SideMenu/>
    <div className='users-container'>
      <Users/>
    </div>
    </>
   
  )
}

export default UsersPage