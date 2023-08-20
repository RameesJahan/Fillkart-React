import React from 'react';
import './Banner.css'

import Card from '../Card/Card';

import Banner1 from '../../assets/images/banner_1.png';
import Banner2 from '../../assets/images/banner_2.png';
import Banner3 from '../../assets/images/banner_3.png';

function Banner() {
  return (
    <div className="banner">
      <div className="main-banner">
        <Card bg={Banner1} topic="Top Offer" highlight="60% OFF" product="Lenovo Laptops"></Card>
      </div>
      <div className="second-banner">
        <Card bg={Banner2} topic="Best Choice" highlight="40% OFF" product="Samsung Phones" sm></Card>
        <Card bg={Banner3} topic="Trending" highlight="25% OFF" product="JBL Headphones" sm></Card>
      </div>
    </div>
  )
}

export default Banner;