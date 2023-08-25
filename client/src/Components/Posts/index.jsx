import React, { useState } from 'react';
import Post from '../Post';
import '../Posts/style.css';

const Posts = ({ books, profile }) => {
  const [booksState, setBooksState] = useState(books);

  const handleLike = (bookIndex) => {
    const updatedBooks = [...booksState];
    updatedBooks[bookIndex].likes += 1;
    setBooksState(updatedBooks);
  };

  return (
    <div className="posts-container">
      {profile !== true ? (
        books.map((book, index) => (
          <Post
            key={index}
            first_name={book.first_name}
            last_name={book.last_name}
            author={book.author}
            name={book.name}
            description={book.description}
            image_url={`data:image/jpeg;base64,${book.image_url}`}
            likes={book.likes}
            book_id={book._id}
            user_id={book.user_id}
            onLike={() => handleLike(index)}
          />
        ))
      ) : (
        books.map((book, index) => (
          <Post
            key={index}
            author={book.author}
            name={book.name}
            description={book.description}
            image_url={`data:image/jpeg;base64,${book.image_url}`}
            likes={book.likes}
            book_id={book._id}
            user_id={book.user_id}
            onLike={() => handleLike(index)}
          />
        ))
      )}
    </div>
  );
};

export default Posts;
