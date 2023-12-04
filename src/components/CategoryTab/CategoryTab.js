import React from 'react';
import { useNavigate } from "react-router-dom";
import './CategoryTab.css';

import ImgLaptop from '../../assets/images/category_1.png';
import ImgAccessories from '../../assets/images/category_2.png';
import ImgKids from '../../assets/images/category_3.png';
import ImgMen from '../../assets/images/category_4.png';
import ImgPhones from '../../assets/images/category_5.png';
import ImgWomen from '../../assets/images/category_6.png';

function CategoryTab() {
  const navigate = useNavigate();
  
  const categories=[{ name:"Accessories",image:ImgAccessories},
                    { name:"Kids",image:ImgKids},
                    { name:"Laptops",image:ImgLaptop},
                    { name:"Men",image:ImgMen},
                    { name:"Phones",image:ImgPhones},
                    { name:"Women",image:ImgWomen}];
  
  return (
    <div className="category-container">
      {categories.map((obj,i) => 
        <div key={i} className="category-item" onClick={() => navigate('/categories/'+obj.name.toLowerCase())} >
          <img className="img-category" src={obj.image} alt="Category" />
          <p className="title-category">{obj.name}</p>
        </div>
      )}
    </div>
  )
}

export default CategoryTab;