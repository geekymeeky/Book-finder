import React from "react";
import SearchBar from "./SearchBar";

const Banner = () => {
  return (
    <div
      className="bg-blue-700"
      style={{
        backgroundImage: `url(https://lh3.googleusercontent.com/q81BJXmKV2Wr9UpGjMMsT7L1swqoJ-ozGm4lxatjZuKKfWL682ZZq-EYhgaoeiIXyr2l8hEWXOfTT2q7aM-20yHd5zN_bS6hkk1wO1sui_KQEbVu_ksdToYpcYvTDp9s_br3kN3B=w2400)`,
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        minHeight: "100vh",
      }}
    >
      <h1 className="py-8 text-6xl text-white text-center font-pacifico">
        Book Finder
      </h1>
      <SearchBar />
    </div>
  );
};

export default Banner;
