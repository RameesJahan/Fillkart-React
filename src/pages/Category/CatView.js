import React from 'react'
import { useParams } from 'react-router-dom';
import './CatView.css'

import ProductCard from '../../components/ProductCard/ProductCard';

import ImgWomen from '../../assets/images/category_6.png';

const CatView = () => {
  const { category } = useParams();
  
  return (
    <div className="cat-view-container" >
      <div className="card-title">
        <h1>{category.toUpperCase()}</h1>
      </div>
      <div className="cat-view-content">
        <ProductCard img={ImgWomen} title="Lorem Epsom aseggd try7t ytdfh hjiriiri idiri" price="3000" off="75" />
      </div>
    </div>
  )
}

export default CatView