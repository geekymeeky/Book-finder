import React from "react";
import Book from "./Book";

const Bookshelf = ({ books }) => {
  return (
    <div className="my-5 p-6 grid md:grid-cols-3 gap-4 auto-rows-max">
      {!books.length
        ? ""
        : books.map((book) => (
            <Book
              key={book.id}
              img={
                !book.volumeInfo.imageLinks
                  ? "https://picsum.photos/200/300"
                  : book.volumeInfo.imageLinks.thumbnail
              }
              bookName={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              description={book.volumeInfo.description}
            />
          ))}
    </div>
  );
};

export default Bookshelf;
