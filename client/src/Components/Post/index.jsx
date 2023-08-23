import React, { useState } from 'react';
import non from "../../assets/heart.svg";
import love from "../../assets/red.svg";
import "../Post/style.css";

const Post = ({ first_name, last_name, author, description, likes, image_url, onLike }) => {

    let [image, setImage] = useState(non);

    const handleToggle = () => {
        if (image === non) {
            setImage(love);
            onLike(); // Call the onLike callback to increase likes
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
                    <span className="author">{author}</span>
                    <span>{description}</span>
                </div>
            </div>
        </>
    )
}

export default Post;
