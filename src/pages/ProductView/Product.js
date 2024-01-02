import React,{ useState, useEffect } from 'react'
import './Product.css'

import ImgWomen from '../../assets/images/category_6.png';

import DiscTabs from '../../components/Discription/DiscriptionTabs';
import DiscDrop from '../../components/Discription/DiscriptionDrop';
import Deals from '../../components/OtherDeals/OtherDeals';

const Product = () => {
  
  const [screenWidth, setScreenWidth] = useState(() => window.innerWidth);
  
  useEffect(() => {
    window.addEventListener('resize',() => setScreenWidth(() => window.innerWidth))
    return () => window.removeEventListener('resize',() => setScreenWidth(() => window.innerWidth))
  }, []);
  
  const DiscData = [{
    title: 'Discription',
    content: [{ 
      head: 'Heading one',
      content: 'Et eiusmod sunt est sint ad magna nulla aliqua culpa eu Lorem magna. Elit anim eu elit eu et laboris eiusmod mollit. Incididunt Lorem minim esse dolor quis amet eu aliqua cillum cillum nostrud aliqua Lorem. Proident id nisi occaecat ea velit magna Lorem anim magna. Commodo nostrud voluptate ipsum dolor fugiat. Excepteur consectetur do dolor proident aliquip sit esse tempor non duis do dolor laboris. Pariatur eu aute magna laboris occaecat sunt sunt sunt nulla sint do ad. Labore velit proident commodo tempor amet cupidatat sunt id pariatur qui et velit. Magna nisi voluptate cillum nostrud reprehenderit aliqua aute ipsum enim fugiat est laborum reprehenderit. Ex occaecat tempor ad do.'
    },{ 
      head: 'Heading Two',
      content: 'Et eiusmod sunt est sint ad magna nulla aliqua culpa eu Lorem magna. Elit anim eu elit eu et laboris eiusmod mollit. Incididunt Lorem minim esse dolor quis amet eu aliqua cillum cillum nostrud aliqua Lorem. Proident id nisi occaecat ea velit magna Lorem anim magna. Commodo nostrud voluptate ipsum dolor fugiat. Excepteur consectetur do dolor proident aliquip sit esse tempor non duis do dolor laboris. Pariatur eu aute magna laboris occaecat sunt sunt sunt nulla sint do ad. Labore velit proident commodo tempor amet cupidatat sunt id pariatur qui et velit. Magna nisi voluptate cillum nostrud reprehenderit aliqua aute ipsum enim fugiat est laborum reprehenderit. Ex occaecat tempor ad do.'
    }]
  },{
    title: 'Additional Info',
    content: [{ 
      head: 'Additional Heading one',
      content: 'Et eiusmod sunt est sint ad magna nulla aliqua culpa eu Lorem magna. Elit anim eu elit eu et laboris eiusmod mollit. Incididunt Lorem minim esse dolor quis amet eu aliqua cillum cillum nostrud aliqua Lorem. Proident id nisi occaecat ea velit magna Lorem anim magna. Commodo nostrud voluptate ipsum dolor fugiat. Excepteur consectetur do dolor proident aliquip sit esse tempor non duis do dolor laboris. Pariatur eu aute magna laboris occaecat sunt sunt sunt nulla sint do ad. Labore velit proident commodo tempor amet cupidatat sunt id pariatur qui et velit. Magna nisi voluptate cillum nostrud reprehenderit aliqua aute ipsum enim fugiat est laborum reprehenderit. Ex occaecat tempor ad do.'
    },{ 
      head: 'Additional Heading Two',
      content: 'Et eiusmod sunt est sint ad magna nulla aliqua culpa eu Lorem magna. Elit anim eu elit eu et laboris eiusmod mollit. Incididunt Lorem minim esse dolor quis amet eu aliqua cillum cillum nostrud aliqua Lorem. Proident id nisi occaecat ea velit magna Lorem anim magna. Commodo nostrud voluptate ipsum dolor fugiat. Excepteur consectetur do dolor proident aliquip sit esse tempor non duis do dolor laboris. Pariatur eu aute magna laboris occaecat sunt sunt sunt nulla sint do ad. Labore velit proident commodo tempor amet cupidatat sunt id pariatur qui et velit. Magna nisi voluptate cillum nostrud reprehenderit aliqua aute ipsum enim fugiat est laborum reprehenderit. Ex occaecat tempor ad do.'
    }]
  },{
    title: 'Shipping & Return',
    content: [{ 
      head: 'Shipping',
      content: 'Et eiusmod sunt est sint ad magna nulla aliqua culpa eu Lorem magna. Elit anim eu elit eu et laboris eiusmod mollit. Incididunt Lorem minim esse dolor quis amet eu aliqua cillum cillum nostrud aliqua Lorem. Proident id nisi occaecat ea velit magna Lorem anim magna. Commodo nostrud voluptate ipsum dolor fugiat. Excepteur consectetur do dolor proident aliquip sit esse tempor non duis do dolor laboris. Pariatur eu aute magna laboris occaecat sunt sunt sunt nulla sint do ad. Labore velit proident commodo tempor amet cupidatat sunt id pariatur qui et velit. Magna nisi voluptate cillum nostrud reprehenderit aliqua aute ipsum enim fugiat est laborum reprehenderit. Ex occaecat tempor ad do.'
    },{ 
      head: 'Return',
      content: 'Et eiusmod sunt est sint ad magna nulla aliqua culpa eu Lorem magna. Elit anim eu elit eu et laboris eiusmod mollit. Incididunt Lorem minim esse dolor quis amet eu aliqua cillum cillum nostrud aliqua Lorem. Proident id nisi occaecat ea velit magna Lorem anim magna. Commodo nostrud voluptate ipsum dolor fugiat. Excepteur consectetur do dolor proident aliquip sit esse tempor non duis do dolor laboris. Pariatur eu aute magna laboris occaecat sunt sunt sunt nulla sint do ad. Labore velit proident commodo tempor amet cupidatat sunt id pariatur qui et velit. Magna nisi voluptate cillum nostrud reprehenderit aliqua aute ipsum enim fugiat est laborum reprehenderit. Ex occaecat tempor ad do.'
    }]
  },{
    title: 'Review',
    content: [{ 
      user: 'user1',
      message: 'enim in consectetur reprehenderit id',
      rating: 4
    },{ 
      user: 'user2',
      message: 'enim in consectetur reprehenderit id',
      rating: 3
    }]
  }]
  
  return (
    <div className="pro-view-container" >
      <div className="pro-view-content">
        <div className="pro-view-sec-top">
          <div className="pro-view-img-container">
            <img src={ImgWomen} alt="Test Img" className="pro-view-img" />
          </div>
          <div className="pro-view-info-container">
            <div className="flex-row">
              <h1 className="pro-view-name">Aute Lorem laboris incididunt dolore nostrud anim ipsum ut ullamco</h1>
              <div className="pro-view-wish-icon">
                <i className="fa-sharp fa-regular fa-heart"></i>
              </div>
            </div>
            <p className="pro-view-brand">Brand Name</p>
            <hr />
            <p className="pro-view-price">₹3783&nbsp;<span>₹4850</span></p>
            <p className="pro-view-off">Discount: <span>₹1067</span>(22%)</p>
            <ul className="pro-view-spec">
              <li>Consectetur irure velit reprehenderit ullamco pariatur</li>
              <li>Enim quis commodo duis sint aliqua</li>
              <li>Id non eiusmod cillum quis dolor</li>
            </ul>
            <div className="flex-row pro-view-btns-container" >
              <button className="pro-view-btn add">Add To Cart</button>
              <button className="pro-view-btn buy">Place Order</button>
            </div>
          </div>
        </div>
        <div className="pro-view-sec-disc">
          { screenWidth >= 560? <DiscTabs data={DiscData}/> : <DiscDrop data={DiscData}/> }
        </div>
      </div>
      <Deals title="Recommended for you"/>
    </div>
  )
}

export default Product