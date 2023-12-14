import React from 'react'
import './WishItem.css'

const WishItem = ({ item,onDel,img,title,off,price }) => {
  
  const offPrice = ((100-(off || 15))/100)*price;
  
  return (
        <div className="wish-item-container">
          <i className="wish-item-ic-close fa fa-xmark" onClick={() => onDel()} />
          <img className="wish-item-img" src={img} alt={title}/>
          <h6 className="wish-item-name">{title}</h6>
          <p className="wish-item-price">₹{offPrice}&nbsp;<span className="price-span">₹{price}</span></p>
        </div>
  )
}

export default WishItem