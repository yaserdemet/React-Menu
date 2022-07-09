import React from "react";
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";
import Menus from "../components/menus/Menus";
import data from "../helper/data";
import  {useState} from  "react";
const allCatogories =["all " ,... new Set (data.map((item) => item.category))]

// new set ile unique categoryları alıp arraye atıyoruz. 1 elemanlı array döndürür.
// bu sebeple onu açmak için spread operator kullanıyoruz.

console.log(allCatogories);
const Home = () => {

    const [menuItems, setMenuItems] = useState(data);



  return (
    <div>
      <Header />
      <Categories allCatogories={allCatogories} />
      <Menus menuItems={menuItems}  />
    </div>
  );
};

export default Home;
