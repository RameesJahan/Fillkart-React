import React,{ useState } from 'react'
import './Discription.css'

import AvatarImg from "../../assets/images/img_avatar.png";

const Tab = ({ title,active,onClick }) => {
  return (
    <div className={active?"disc-tab active":"disc-tab"} onClick={onClick}>
      {title}
    </div>
  )
}

const DiscriptionTabs = ({ data }) => {
  
  const [active, setActive] = useState(0);
  
  const handleClick = (i) => {
    setActive(i)
  }
  
  return (
    <div className="disc-tabs-container" >
      <div className="disc-tabs-menu-container">
        {
          data.map((item,i) => (
            <Tab key={i} title={item.title} active={ active===i?true:false } onClick={() => handleClick(i)}/>
          ))
        }
      </div>
      <div className="disc-tabs-content-container">
        <div className={active===0?"disc-tabs-content disc active":"disc-tabs-content disc)"}>
          {
            data[0].content.map((item,i) => (
              <div key={i} className="disc-item" >
                <h3>{item.head}</h3>
                <p>{item.content}</p>
              </div>
            ))
          }
        </div>
        <div className={active===1?"disc-tabs-content addinfo active":"disc-tabs-content addinfo"}>
          {
            data[1].content.map((item,i) => (
              <div key={i} className="disc-item" >
                <h3>{item.head}</h3>
                <p>{item.content}</p>
              </div>
            ))
          }
        </div>
        <div className={active===2?"disc-tabs-content ship active":"disc-tabs-content ship)"}>
          {
            data[2].content.map((item,i) => (
              <div key={i} className="disc-item" >
                <h3>{item.head}</h3>
                <p>{item.content}</p>
              </div>
            ))
          }
        </div>
        <div className={active===3?"disc-tabs-content review active":"disc-tabs-content review"}>
          {
            data[3].content.map((item,i) => (
              <div key={i} className="review-item" >
                <div className="rv-item-head">
                  <img src={AvatarImg} alt={item.user} className="rv-item-head-avatar icon" />
                  <div className="rv-item-head-name">
                    <h4>{item.user}</h4>
                    <p>Rating: {item.rating}/5</p>
                  </div>
                  <div className="rv-item-ic-like">
                    <i className="fa-sharp fa-regular fa-heart"></i>
                  </div>
                </div>
                <p className="rv-item-message">{item.message}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default DiscriptionTabs