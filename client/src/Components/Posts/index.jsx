import React, { useState, useEffect } from 'react';
import Post from '../Post';
import "../Posts/style.css"


const Posts = ({books}) => {
    return (
        <>
             {books.map((book, index) => (
                <Post
                    key={index}
                    first_name={book.first_name}
                    last_name={book.last_name}
                    author={book.author}
                    description={book.description}
                    image_url={`data:image/jpeg;base64,${book.image_url}`} 
                    likes={book.likes}
                />
            ))}  
        </>
    );
};

export default Posts;
