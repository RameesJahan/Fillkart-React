import React from 'react'
import './CartItem.css'

const CartItem = ({ item,onDel,img,title,off,price,qty }) => {
  
  const offPrice = ((100-(off || 15))/100)*price;
  return (
        <div className="cart-item-container">
          <i className="cart-item-ic-close fa fa-xmark" onClick={() => onDel()} />
          <img className="cart-item-img" src={img} alt={title}/>
          <h6 className="cart-item-name">{title}</h6>
          <p className="cart-item-price">₹{offPrice}&nbsp;<span className="price-span">₹{price}</span></p>
          <p className="cart-item-qty">Qty: {qty}</p>
        </div>
  )
}

export default CartItem