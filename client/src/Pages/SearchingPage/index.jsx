import React from 'react'
import axios from 'axios';
import {useState, useEffect } from 'react';
import SideMenu from '../../Components/SideMenu';
import SearchBar from '../../Components/SearchBar';

const SearchingPage = () => {
    const token = localStorage.getItem("token")
    const [books_Ids, setBookIds] = useState([]);

    useEffect(() => {
        async function fetchBookIds() {
          try {
            const response = await axios.get('http://127.0.0.1/users/books', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            setBookIds(response.data);
            console.log(books_Ids)
          } catch (error) {
            console.error('Error fetching book IDs:', error);
          }
        }
    
        fetchBookIds();
      }, []);
      const handleSearch = async () =>{
        
      }

      return(
        <>
        <SideMenu/>
        <SearchBar onSearch={handleSearch}/>
        </>
      )
    }
export default SearchingPage