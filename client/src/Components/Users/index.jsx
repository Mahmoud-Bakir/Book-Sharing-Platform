import React from 'react'
import User from '../User';
import "../Users/style.css"
import { useState,useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const defaultState = {}
  const [users,setUsers] = useState(defaultState)
  const token = localStorage.getItem("token")

  const headers = {
    Authorization: `Bearer ${token}`
  };
  useEffect(() => {
    async function getUsers() {
      const response = await axios.get("http://127.0.0.1:8000/users/display_users",{headers})
      const data = response.data
      setUsers(data)
      console.log(users)
  }
  getUsers()},[])
  return (
    <>
      {Object.keys(users).map((userId, index) => (
        <User
          key={index}
          first_name={users[userId].first_name}
          last_name={users[userId].last_name}
        />
      ))}
    </>
  );
};
export default Users