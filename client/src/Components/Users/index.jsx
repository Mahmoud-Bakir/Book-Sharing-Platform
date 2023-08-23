import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from '../User';
import SideMenu from '../SideMenu';
import ProfileHeader from '../ProfileHeader';
import ProfilePage from '../../Pages/ProfilePage';
import '../Users/style.css';

const Users = () => {
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [following_list, setFollowingList] = useState([]); 
  const params = {
    user_Id: id
  };

  const headers = {
    Authorization: `Bearer ${token}`
  };

  const checkUserProfile = async (user_Id) => {
    const params = {
      user_Id: user_Id
    };
    const response = await axios.get('http://127.0.0.1:8000/users/profile', { headers, params });
    const data = response.data;
    return <ProfilePage test={data} />;
  };

  const getUser = async () => {
    const response = await axios.get('http://127.0.0.1:8000/users/profile', { headers, params });
    const data = response.data;
    setUser(data);
    setFollowingList(data.following);
  };

  const getUsers = async () => {
    const response = await axios.get('http://127.0.0.1:8000/users/display_users', { headers });
    const data = response.data;
    setUsers(data);
  };

  useEffect(() => {
    getUser(); 
    getUsers(); 
  }, []);

    return (
      <>
        {Object.keys(users).map((user_Id, index) => (
          <User
            key={index}
            id={users[user_Id]._id}
            first_name={users[user_Id].first_name}
            last_name={users[user_Id].last_name}
            follow={following_list.includes(users[user_Id]._id) ? true : false}
            check={checkUserProfile} 
          />
        ))}
      </>
  );
};

export default Users;
