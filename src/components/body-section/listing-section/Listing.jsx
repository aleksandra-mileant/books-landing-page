import React from 'react';
import './listing.scss';
import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import book2 from '../../Assets/book2.png';
import book3 from '../../Assets/book3.png';
import book4 from '../../Assets/book4.png';
import book5 from '../../Assets/book5.png';
import user2 from '../../Assets/user2.jpeg';
import user3 from '../../Assets/user3.jpeg';
import user4 from '../../Assets/user4.jpeg';
import user5 from '../../Assets/user5.jpeg';

export const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h2>My listings</h2>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>
      
      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={book2} alt="book" />
        </div>
        
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={book3} alt="book" />
        </div>
        
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={book4} alt="book" />
        </div>
        
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={book5} alt="book" />
        </div>
      </div>
      
      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>
          
          <div className="card flex">
            <div className="users">
              <img src={user2} alt="user"/>
              <img src={user3} alt="user"/>
              <img src={user4} alt="user"/>
              <img src={user5} alt="user"/>
            </div>
            <div className="cardText">
                <span>
                  14.58 Books sold <br />
                  <small>
                    22 Sellers
                    <span className="date">7 Days</span>
                  </small>
                </span>
            </div>
          </div>
        </div>
        
        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>
          
          <div className="card flex">
            <div className="users">
              <img src={user4} alt="user"/>
              <img src={user5} alt="user"/>
              <img src={user2} alt="user"/>
              <img src={user3} alt="user"/>
            </div>
            <div className="cardText">
                <span>
                  76.56 Books sold <br />
                  <small>
                    34 Sellers
                    <span className="date">30 Days</span>
                  </small>
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
