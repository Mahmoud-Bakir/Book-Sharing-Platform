import Posts from "../../Components/Posts";
import SideMenu from "../../Components/SideMenu";
import axios from "axios";
import { useState,useEffect } from "react";
import "../HomePage/style.css"

const HomePage = () => {
    const [books,setBooks] = useState([])
    const token = localStorage.getItem('token');
    const id = localStorage.getItem("id")
        useEffect(() => {
        
          async function getBooks() {
          const response = await axios.get('http://127.0.0.1:8000/users/feed_books', {
            params: {
                user_Id:id
            },
            headers: {
              Authorization: `Bearer ${token}`,
            }
          });
          const data=response.data
          console.log(data)
          setBooks(data);
        }
        getBooks()},[])
    return (
        <>
          <SideMenu />
          {books.length === 0 ? (
          <div className="posts-container">
             <p className="not-found">Follow users to fill your feed !</p>
          </div>
         
          ) : (
           <div className="posts-container">
             <Posts books={books} />
           </div>
)}

           
           
       </>
    );
}
export default HomePage;