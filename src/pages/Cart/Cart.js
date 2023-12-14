import React from 'react'
import { Link } from "react-router-dom";
import './Cart.css'

import CartItem from '../../components/CartItem/CartItem';
import Deals from '../../components/OtherDeals/OtherDeals';
import Title from '../../components/PageTitle/Title';

import ImgWomen from '../../assets/images/category_6.png';
import IMG_EMT_BOX from '../../assets/images/empty_box.png'

const DefaultCart = ({ items }) => { 
  
  const handleRemove = () => {
    console.log("Removed")
  }
  
  return (
      <div className="def-content" >
        <div className="def-container" >
          { items.map((item,i) => (
            <div key={i} className="def-item" >
              <CartItem 
                img={ImgWomen} 
                title="Lorem Epsom aseggd try7t ytdfh hjiriiri idiri" 
                price="3000" 
                off="75" 
                qty="2"
                onDel={handleRemove} 
              />
            </div>
          ))}
        </div>
        <div className="def-place-order">
          <p className="def-po-price">₹1299/-</p>
          <button className="def-po-btn">Place Order</button>
        </div>
        <Deals title="Recommended for you" />
      </div>
    )
}

const EmptyCart = () => { 
  return (
      <div className="emt-container">
        <img src={ IMG_EMT_BOX } alt="Empty Box" />
        <p>Your Cart is Empty</p>
        <Link className="btn-emt-cart" to="/">
          Continue to shopping
        </Link>
      </div>
    )
}
  

const Cart = () => {
  
  const cartItems = [0,1,2,3,4,5,6]
  
  return (
    <div className="cart-container" >
      <div className="cart-title-container">
        <Title name="My Cart" />
      </div>
      { cartItems.length === 0 ? <EmptyCart /> : <DefaultCart items={cartItems} />}
    </div>
  )
}

export default Cart