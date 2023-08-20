import React from 'react';
import './OtherDeals.css'

import ImgWomen from '../../assets/images/category_6.png';

import ProductCard from '../ProductCard/ProductCard';


function OtherDeals({title}) {
  return (
    <div className="otr-deals-container">
      <div className="otr-deals-header">
        <p>{title}</p>
      </div>
      <div className="otr-deals-content">
        <ProductCard img={ImgWomen} title="Lorem Epsom aseggd try7t ytdfh hjiriiri idiri" price="3000" off="75" />
        <ProductCard img={ImgWomen} title="Lorem Epsom aseggd try7t ytdfh hjiriiri idiri" price="3000" off="75" />
        <ProductCard img={ImgWomen} title="Lorem Epsom aseggd try7t ytdfh hjiriiri idiri" price="3000" off="75" />
      </div>
    </div>
  )
}

export default OtherDeals;