import React from 'react'
import "../SearchPage/style.css"
import Users from '../../Components/Users'
import SideMenu from '../../Components/SideMenu'

const SearchPage = () => {
  return (
    <>
     <SideMenu/>
    <div className='users-container'>
      <Users/>
    </div>
    </>
   
  )
}

export default SearchPage