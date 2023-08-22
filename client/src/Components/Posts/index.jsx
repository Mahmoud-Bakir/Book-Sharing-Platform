import React, { useState, useEffect } from 'react';
import Post from '../Post';
import "../Posts/style.css"


const Posts = ({books}) => {
    return (
        <>
             {books.map((book, index) => (
                <Post
                    key={index}
                    first_name="test"
                    last_name="test"
                    author={book.author}
                    description={book.description}
                    image={book.image}
                    likes={book.likes}
                />
            ))}  
        </>
    );
};

export default Posts;