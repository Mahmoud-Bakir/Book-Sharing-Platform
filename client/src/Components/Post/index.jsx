import React, { useState } from 'react';
import non from "../../assets/heart.svg";
import love from "../../assets/red.svg";
import "../Post/style.css";
import axios from 'axios';

const Post = ({ first_name, last_name, author, description, likes, image_url, onLike, book_id,user_id,name}) => {
    const token = localStorage.getItem('token');
    const [image, setImage] = useState(non);

    const handleToggle = async () => {
        if (image === non) {
            setImage(love);
            try {
                const body = {
                    user_id: user_id,
                    book_id: book_id
                };
                console.log(body) 

                const response = await axios.post('http://127.0.0.1:8000/users/like', body, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const newLikesCount = response.data.newLikesCount;
                onLike(newLikesCount);
                
            } catch (error) {
                console.error(error);
            }
        } else {
            setImage(non);
        }
    };

    return (
        <>
            <div className="post-container">
                <div className="post-head">
                    <h3>{first_name} {last_name}</h3>
                </div>
                <div className="post-body">
                    <img src={image_url} alt="" className="test" />
                </div>
                <div className="post-foot" onClick={handleToggle}>
                    <img src={image} alt="" />
                </div>
                <span className="likes">{likes} likes</span>
                <div className="post-foot-desc">
                    <span className="author">{name} - {author}</span>
                    <span>{description}</span>
                </div>
            </div>
        </>
    )
}

export default Post;
