import React from 'react';
import './sideBar.scss';

import logo from '../Assets/book-4986.svg';
import { IoMdSpeedometer } from 'react-icons/io';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineExplore } from 'react-icons/md';
import { BsTrophy } from 'react-icons/bs';
import { AiOutlineContacts, AiOutlinePieChart } from 'react-icons/ai';
import { IoTrendingUpOutline } from 'react-icons/io5';
import { FaRegCreditCard } from 'react-icons/fa';
import { GoQuestion } from 'react-icons/go';

export const SideBar = () => {
  return (
    <div className="sideBar grid">
      
      <div className="logoDiv flex">
        <img src={logo} alt="image" />
        <h2>Books.</h2>
      </div>
      
      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">
                Dashboard
              </span>
            </a>
          </li>
          
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <TbTruckDelivery className="icon" />
              <span className="smallText">
                My Orders
              </span>
            </a>
          </li>
          
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">
                Explore
              </span>
            </a>
          </li>
          
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallText">
                Products
              </span>
            </a>
          </li>
        </ul>
      </div>
      
      <div className="settingsDiv">
        <h3 className="divTitle">
          SETTINGS
        </h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">
                Charts
              </span>
            </a>
          </li>
          
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <IoTrendingUpOutline className="icon" />
              <span className="smallText">
                Trends
              </span>
            </a>
          </li>
          
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiOutlineContacts className="icon" />
              <span className="smallText">
                Contact
              </span>
            </a>
          </li>
          
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <FaRegCreditCard className="icon" />
              <span className="smallText">
                Billing
              </span>
            </a>
          </li>
        </ul>
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
  )
}
