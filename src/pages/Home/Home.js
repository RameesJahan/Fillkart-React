import React from 'react';
import './Home.css';

import Banner from '../../components/Banner/Banner';
import CategoryTab from '../../components/CategoryTab/CategoryTab';
import HotDeals from '../../components/Deals/HotDeals';
import Deals from '../../components/OtherDeals/OtherDeals';

function Home() {
  return (
    <div className="container" >
      <div className="section-top">
        <Banner/>
        <CategoryTab/>
      </div>
      <div className="section-hot">
        <HotDeals/>
      </div>
      <div className="section-featured">
        <Deals title="Featured Products"/>
      </div>
      <div className="section-recomented">
        <Deals title="Recommended for you"/>
      </div>
      <div className="section-footer">
        <p>Developed by <a href="https://rameesjahan.me">Ramees Jahan</a></p>
      </div>
    </div>
  )
}

export default Home;