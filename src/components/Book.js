import React from "react";

const Book = ({ img, bookName, author, description }) => {
  return (
    <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-3 h-auto shadow-2xl">
      <img
        className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src={img}
        alt={bookName}
      />
      <div className="pt-6 md:p-6 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-semibold line-clamp-3">{bookName}</p>
          <p className="text-sm text-gray-900 line-clamp-3">{description}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-cyan-600 pb-5 ">{author ? `${author}` : ""}</div>
        </figcaption>
      </div>
    </figure>
  );
};

export default Book;
