import React from 'react';
import './top.scss';
import { BiSearchAlt } from 'react-icons/bi';
import { TbMessageCircle } from 'react-icons/tb';
import { IoNotificationsOutline } from 'react-icons/io5';

import user from '../../Assets/user.jpeg';
import img from '../../Assets/pexels-pixabay-256450.png';
import video from '../../Assets/185096 (540p).mp4';
import { BsArrowRightShort } from 'react-icons/bs';
import { GoQuestion } from 'react-icons/go';

export const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Books.</h1>
          <p>Hello IsraTech, Welcome back!</p>
        </div>
        
        
        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard"/>
          <BiSearchAlt classname="icon"/>
        </div>
        
        <div className="adminDiv flex">
          <TbMessageCircle classname="icon"/>
          <IoNotificationsOutline classname="icon"/>
          <div className="adminImage">
            <img src={user} alt="admin"/>
          </div>
        </div>
      </div>
      <div className="cardSection flex">
        <div className="rightCard flex">
          <h2>Create and sell extraordinary products</h2>
          <p>The world's fast growing industry today are natural made products!</p>
          
          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>
          
          <div className="videoDiv">
            <video src={video} autoPlay={true} loop={true} muted={true}/>
          </div>
        </div>
        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h2>My Status</h2>
              
              <div className="flex">
                <span>
                  Today <br/> <small>4 Orders</small>
                </span>
                <span>
                  This month <br/> <small>137 Orders</small>
                </span>
              </div>
              
              <span className="flex link">
                Go to my orders <BsArrowRightShort className="icon"/>
              </span>
            </div>
            
            <div className="imgDiv">
              <img src={img} alt="iamge"/>
            </div>
            
            <div className="sideBarCard">
              <GoQuestion className="icon" />
              
              <div className="cardContent">
                <div className="circle1" />
                <div className="circle2" />
                
                <h3>Help Center</h3>
                <p>Having trouble in Books, please contact us from for more questions.</p>
                
                <button className="btn">
                  Go to help center
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
