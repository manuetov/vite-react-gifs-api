import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GiftGiphyApp = () => {
  const [categories, setCategories] = useState(['meme']);
  console.log(categories);
  return (
    <>
      <h1> Gifs-Giphy </h1>
      <AddCategory 
        setCategories={setCategories} 
        categories={categories} 
      />

      {categories.map((category) => (
        //  Gif category
        <div key={category}>
          <GifGrid category={category} />
        </div>
      ))}
    </>
  );
};

export default GiftGiphyApp;
