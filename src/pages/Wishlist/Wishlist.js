import React from 'react'
import { Link } from "react-router-dom";
import './Wishlist.css'

import Title from '../../components/PageTitle/Title'
import WishItem from '../../components/WishItem/WishItem'

import ImgWomen from '../../assets/images/category_6.png';
import IMG_EMT_WISH from '../../assets/images/wishlist_img.png'

const DefWishlist = ({ wishes }) => {
  
  const handleRemove = () => {
    console.log("Removed")
  }
  
  return (
    <div className="def-wish-container">
        {
          wishes.map((item ,i ) => (
            <div key={i} className="def-wish-item">
              <WishItem 
                img={ImgWomen} 
                title="Lorem Epsom aseggd try7t ytdfh hjiriiri idiri" 
                price="3000" 
                off="75"
                onDel={handleRemove} 
              />
            </div>
          ))
        }
      </div>
  )
}

const EmptyWishList = () => {
  return (
    <div className="emt-wish-container">
        <img src={ IMG_EMT_WISH } alt="Empty Box" />
        <p>Your Wishlist is Empty</p>
        <Link className="btn-emt-wish" to="/">
          Continue to shopping
        </Link>
    </div>
  )
}

const Wishlist = () => {
  const wishes = []
  
  
  
  return (
    <div className="wish-container" >
      <div className="wish-title-container">
        <Title name="Wishlist" />
      </div>
      { wishes.length === 0 ? <EmptyWishList /> : <DefWishlist wishes={wishes} /> }
    </div>
  )
}

export default Wishlist