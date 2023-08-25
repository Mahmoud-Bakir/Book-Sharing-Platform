import "../SideMenu/style.css"
import logo from "../../assets/logo.png"
import home from "../../assets/feed.svg" 
import searching from "../../assets/search.svg"
import books from "../../assets/books.svg" 
import profile from "../../assets/profile.svg" 
import create from "../../assets/create.svg" 
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const SideMenu = () =>{
  const navigater = useNavigate()
  const moveToProfile = () => navigater('/profile')
  const moveToHome = () => navigater('/home')
  const moveToForm = () => navigater('/addPost')
  const moveToUsers = () => navigater('/users')
  const search = () => navigater('/search')

    

    return(
        <>
        <div className="side-menu">
             <div className="logo-container">
               <img src={logo} alt="" className="logo" />
            </div>
            
            <div className="side-menu-subtitle" onClick={moveToHome}>
                <img src={home} alt="home" />
                <span>Home</span>
            </div>
            <div className="side-menu-subtitle" onClick={moveToUsers}>
                <img src={searching} alt="search" />
                <span>Search Users</span>
            </div>
            <div className="side-menu-subtitle" onClick={search}>
                <img src={books} alt="search" />
                <span>Search Books</span>
            </div>
            <div className="side-menu-subtitle" onClick={moveToForm}>
                <img src={create} alt="create" />
                <span>Create</span>
            </div>
            <div className="side-menu-subtitle"  onClick={moveToProfile}>
                <img src={profile} alt="profile"/>
                <span>Profile</span>
            </div>
            

        </div>
        </>
    )

}
export default SideMenu