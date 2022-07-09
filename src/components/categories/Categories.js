import React from "react";
import "./Categories.css";

const Categories = ({ allCatogories}) => {
  return (
    <div className="btn-container">
      {allCatogories.map((item, index) => {
        return (
          <button key={index} type="button" className="category-button">
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
