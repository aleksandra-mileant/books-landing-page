import React from 'react';
import './activity.scss';
import { BsArrowRightShort } from 'react-icons/bs';

import user from '../../Assets/user.jpeg';
import user2 from '../../Assets/user2.jpeg';
import user3 from '../../Assets/user3.jpeg';
import user4 from '../../Assets/user4.jpeg';
import user5 from '../../Assets/user5.jpeg';


export const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h2>ResentActivity</h2>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>
      
      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user4} alt="customer" />
          <div className="customerDetails">
            <span className="name">Name Surname</span>
            <small>Ordered a new book</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        
        <div className="singleCustomer flex">
          <img src={user} alt="customer" />
          <div className="customerDetails">
            <span className="name">Name Surname</span>
            <small>Ordered a new book</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        
        <div className="singleCustomer flex">
          <img src={user2} alt="customer" />
          <div className="customerDetails">
            <span className="name">Name Surname</span>
            <small>Ordered a new book</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        
        <div className="singleCustomer flex">
          <img src={user5} alt="customer" />
          <div className="customerDetails">
            <span className="name">Name Surname</span>
            <small>Ordered a new book</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        
        <div className="singleCustomer flex">
          <img src={user3} alt="customer" />
          <div className="customerDetails">
            <span className="name">Name Surname</span>
            <small>Ordered a new book</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
      </div>
    </div>
  )
}
