import React, { useState, useEffect } from 'react';
import Post from '../Post';
import "../Posts/style.css"


const Posts = ({ books }) => {
    const [booksState, setBooksState] = useState(books);

    const handleLike = (bookIndex) => {
        const updatedBooks = [...booksState];
        updatedBooks[bookIndex].likes += 1;
        setBooksState(updatedBooks);
    }

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
                    onLike={() => handleLike(index)}
                />
            ))}
        </>
    );
};

export default Posts;
