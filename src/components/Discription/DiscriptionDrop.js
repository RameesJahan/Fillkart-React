import React,{ useState } from 'react'
import './Discription.css'

import AvatarImg from "../../assets/images/img_avatar.png";

const DropContainer = ({ title, active, ondrop, children }) => {
  return (
    <div className="disc-drop-container">
      <div className="disc-drop-top">
        <h4>{title}</h4>
        { active?
            <i onClick={ondrop} className="fa-solid fa-minus"></i>:
            <i onClick={ondrop} className="fa-solid fa-plus"></i>
            
        }
      </div>
      <div className={`disc-drop-content-container ${active&&"active"}`}>
        <div className="disc-drop-content">
          { children }
        </div>
      </div>
    </div>
  )
}

const DiscriptionDrop = ({ data }) => {
  
  const [active, setActive] = useState(0);
  
  const handleDrop = i => {
    if(active === i) setActive(null)
    else setActive(i)
  }
  
  return (
    <div>
      <DropContainer ondrop={() => handleDrop(0)} title="Discription" active={active===0?true:false}>
        <div className="disc-tabs-content disc active">
          {
            data[0].content.map((item,i) => (
              <div key={i} className="disc-item" >
                <h3>{item.head}</h3>
                <p>{item.content}</p>
              </div>
            ))
          }
        </div>
      </DropContainer>
      <DropContainer ondrop={() => handleDrop(1)} title="Additional Info" active={active===1?true:false}>
        <div className="disc-tabs-content addinfo active">
          {
            data[1].content.map((item,i) => (
              <div key={i} className="disc-item" >
                <h3>{item.head}</h3>
                <p>{item.content}</p>
              </div>
            ))
          }
        </div>
      </DropContainer>
      <DropContainer ondrop={() => handleDrop(2)} title="Shipping & Return" active={active===2?true:false}>
        <div className="disc-tabs-content ship active">
          {
            data[2].content.map((item,i) => (
              <div key={i} className="disc-item" >
                <h3>{item.head}</h3>
                <p>{item.content}</p>
              </div>
            ))
          }
        </div>
      </DropContainer>
      <DropContainer ondrop={() => handleDrop(3)} title="Reviews" active={active===3?true:false}>
        <div className="disc-tabs-content review active">
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
      </DropContainer>
    </div>
  )
}

export default DiscriptionDrop