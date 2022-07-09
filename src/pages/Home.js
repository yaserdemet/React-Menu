import React from "react";
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";
import Menus from "../components/menus/Menus";
import data from "../helper/data";
const allCatogories =[... new Set (data.map((item) => item.category))]

// new set ile unique categoryları alıp arraye atıyoruz.

console.log(allCatogories);
const Home = () => {
  return (
    <div>
      <Header />
      <Categories allCatogories={allCatogories} />
      <Menus />
    </div>
  );
};

export default Home;
