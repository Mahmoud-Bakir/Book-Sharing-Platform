import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileHeader from "../../Components/ProfileHeader";
import SideMenu from "../../Components/SideMenu";
import Posts from "../../Components/Posts";
import "./style.css"

const ProfilePage = ({ test }) => {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState({});
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            user_Id: id
          }
        });
        const userData = response.data;
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    }

    async function getBooks() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/users/user_books", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            user_Id: id
          }
        });
        const booksData = response.data;
        setBooks(booksData);
      } catch (error) {
        console.error("Error fetching feed books:", error);
      }
    }

    getUser();
    console.log(books.length)
    console.log(books)
    getBooks();
  }, [id, token]);

  return (
    <>
      {test ? (
        <ProfileHeader user={test} />
      ) : (
        <ProfileHeader user={user} />
      )}
      <SideMenu />
      
      {books.length === 0 ? (
        <div className="posts-container">
          <p className="not-found">Click on Create to add your first Post</p>
        </div>
      ) : (
        <div className="profile-posts-container">
          <Posts books={books} profile={true} />
        </div>
      )}
    </>
  );
}
export default ProfilePage
