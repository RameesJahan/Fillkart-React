import React from 'react';
import { useNavigate } from "react-router-dom";
import './ProductCard.css';

function ProductCard({img, title, price, tag, off}) {
  
  const navigate = useNavigate()
  
  const offPrice = ((100-(off || 15))/100)*price;
  return (
    <div className="pro-card" onClick={() => navigate('/product')}>
        { tag && <p className="pro-card-tag">{tag}</p>}
          <img className="pro-card-img" src={img} alt={title}/>
          <h3 className="pro-card-name">{title}</h3>
          <p className="pro-card-price">₹{offPrice}&nbsp;<span className="price-span">₹{price}</span></p>
          <button className="pro-card-btn">Add To Cart</button>
        </div>
  )
}

export default ProductCard;