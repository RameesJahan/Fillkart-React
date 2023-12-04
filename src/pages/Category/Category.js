import React from "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";

import IMG_LAP from '../../assets/images/category_1.png';
import IMG_ACC from '../../assets/images/category_2.png';
import IMG_KID from '../../assets/images/category_3.png';
import IMG_MEN from '../../assets/images/category_4.png';
import IMG_PHO from '../../assets/images/category_5.png';
import IMG_WOM from '../../assets/images/category_6.png';

const Category = () => {
  const navigate = useNavigate();
  
  const categories = [
    { name: "accessories",img: IMG_ACC },
    { name: "phones",img: IMG_PHO },
    { name: "laptops",img: IMG_LAP },
    { name: "women",img: IMG_WOM },
    { name: "men",img: IMG_MEN },
    { name: "kids",img: IMG_KID },
  ];

  return (
    <div className="cat-container" >
      {
        categories.map((element, i ) => (
          <div className="cat-item" key={i}>
            <div className="cat-item-content" onClick={() => navigate('/categories/'+element.name)} >
              <span>{element.name.toUpperCase()}</span>
              <img src={element.img} alt={element.name.toUpperCase()} />
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Category;
