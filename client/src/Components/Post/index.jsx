import "../Post/style.css"
import non from "../../assets/heart.svg"
import love from "../../assets/red.svg"
import React, { useState } from 'react';
const Post = ({first_name,last_name,author,description,likes,image_url}) =>{
  
    let [image, setImage] = useState(non);
    let[likescount,setLikesCount] = useState(0)

    const handleToggle = () => {
      if (image==non) {
       setImage(love);
       setLikesCount(likescount=likescount+1)
    } else {
      setImage(non);
      setLikesCount(likescount=likescount-1)
    }
  };
    return(   <>
        <div className="post-container">
            <div className="post-head">
               <h3>{first_name} {last_name}</h3>
            </div>
            <div className="post-body">
            <img src= {image_url} alt="" className="test"/>
            </div>
            <div className="post-foot">
                <img src={non} alt="" onClick={handleToggle}/>
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
export default Post