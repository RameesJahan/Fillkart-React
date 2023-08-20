import React from 'react';
import './HotDeals.css'

import ImgWomen from '../../assets/images/category_6.png';

import ProductCard from '../ProductCard/ProductCard';

function HotDeals() {
  return (
  <div className="deals-container">
    <div className="deals-header">
      <h3>Hot Deals!</h3>
      <p>&ensp;Get in best prices.</p>
    </div>
    <div className="deals-content row">
      <div className="deals-offer col">
        <center>
          <p className="off-card-txt-1">Hurry Up!</p>
          <p className="off-card-txt-2">Save upto</p>
          <p className="off-card-off">75%</p>
          <p className="off-card-cat">On Clothing</p>
        </center>
      </div>
      <div className="deals-item col">
        <ProductCard img={ImgWomen} title="Lorem Epsom aseggd try7t ytdfh hjiriiri idiri" price="3000" off="75" tag="Hot Deals"/>
        <ProductCard img={ImgWomen} title="Lorem Epsom aseggd try7t ytdfh hjiriiri idiri" price="3000" off="75" tag="Hot Deals"/>
        <ProductCard img={ImgWomen} title="Lorem Epsom aseggd try7t ytdfh hjiriiri idiri" price="3000" off="75" tag="Hot Deals"/>
      </div>
    </div>
  </div>
  )
}

export default HotDeals;