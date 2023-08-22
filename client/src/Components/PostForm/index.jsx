import "../LoginForm/style.css";
import Partition from "../Partition";
import Button from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo.png"
import "../PostForm/style.css"

const PostForm = () => {
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');
  const navigater = useNavigate();
  const moveToHome = () => navigater('/home');

  const defaultState = {
    name: "",
    author: "",
    image_url: "", 
    description: "",
    likes: 0,
    user_Id: id,
  };
  const [data, setData] = useState(defaultState);

  const handleDataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setData({ ...data, image_url: reader.result.split(',')[1] });
      };
    }
  };

  const handleAddBook = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/users/add_book',
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', // Add this header
          },
        }
      );
      console.log(response.data)
      moveToHome();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <>
      <div className="form-container">
        <div className="logo-container">
          <span>Fill the form to add the book</span>
        </div>
        <div className="part">
          <Partition
            Name={"name"}
            Itype={"text"}
            holder={"please enter the name of Book"}
            lab={"Name"}
            value={data.name}
            onChange={handleDataChange}
          />
        </div>
        <div className="part">
          <Partition
            Name={"author"}
            Itype={"text"}
            holder={"Please enter Book author's name"}
            lab={"Author"}
            value={data.author}
            onChange={handleDataChange}
          />
        </div>
        <div className="part">
          <Partition
            Name={"description"}
            Itype={"text"}
            holder={"Please enter a description"}
            lab={"Description"}
            value={data.description}
            onChange={handleDataChange}
          />
        </div>
        <div className="part">
          <Partition
            Name={"image_url"}
            Itype={"file"}
            holder={"choose a file"}
            lab={"Image"}
            value={data.description}
            onChange={handleImageChange}
          />
        </div>
        <Button name={"Add"} onSubmit={handleAddBook} />
     </div> 
    </>
  );
};
export default PostForm;
