//import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import './Familiarizer.css';

// class Navb extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       lastID: 2,
//     };
//   }
function Navb(){
  const [lastID, setLastID] = useState(2);

  const timeout = (delay) => new Promise((res) => setTimeout(res, delay));

  const handelMove = async (index, newLeft, newRight) => {
    // Your existing function implementation here
    let swimmer = document.getElementById('swimmer');
    let svgs = document.querySelectorAll('.item-svg');
    let texts = document.querySelectorAll('.item-text');
    if (lastID > index) {
      swimmer.style.left = `${newLeft}%`;
      await timeout(300);
      swimmer.style.right = `${newRight}%`;
    } else if (lastID < index) {
      swimmer.style.right = `${newRight}%`;
      await timeout(300);
      swimmer.style.left = `${newLeft}%`;
    }
    svgs.forEach((el) => {
      el.classList.remove('item-svg-active');
    });
    texts.forEach((el) => {
      el.classList.remove('item-text-active');
    });
    svgs[index].classList.add('item-svg-active');
    texts[index].classList.add('item-text-active');
    setLastID(index);
  };

  useEffect(() => {
    // Additional side effects can be handled here
  }, [lastID]);


    return (
      <div className="container">
        <nav>          
          <button onClick={() => handelMove(0,0,80)} className="item">
            <svg className="item-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className="item-text">Profile</span>
          </button>
          <button onClick={() => handelMove(1,20,60)} className="item">
            <svg className="item-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 7.16229C21 6.11871 21 5.59692 20.7169 5.20409C20.4337 4.81126 19.9387 4.64625 18.9487 4.31624L17.7839 3.92799C16.4168 3.47229 15.7333 3.24444 15.0451 3.3366C14.3569 3.42876 13.7574 3.82843 12.5583 4.62778L11.176 5.54937C10.2399 6.1734 9.77191 6.48541 9.24685 6.60952C9.05401 6.65511 8.85714 6.68147 8.6591 6.68823C8.11989 6.70665 7.58626 6.52877 6.51901 6.17302C5.12109 5.70705 4.42213 5.47406 3.89029 5.71066C3.70147 5.79466 3.53204 5.91678 3.39264 6.06935C3 6.49907 3 7.23584 3 8.70938V12.7736M21 11V15.2907C21 16.7642 21 17.501 20.6074 17.9307C20.468 18.0833 20.2985 18.2054 20.1097 18.2894C19.5779 18.526 18.8789 18.293 17.481 17.827C16.4137 17.4713 15.8801 17.2934 15.3409 17.3118C15.1429 17.3186 14.946 17.3449 14.7532 17.3905C14.2281 17.5146 13.7601 17.8266 12.824 18.4507L11.4417 19.3722C10.2426 20.1716 9.64311 20.5713 8.95493 20.6634C8.26674 20.7556 7.58319 20.5277 6.21609 20.072L5.05132 19.6838C4.06129 19.3538 3.56627 19.1888 3.28314 18.7959C3.01507 18.424 3.0008 17.9365 3.00004 17"
                strokeWidth="1.5" stroke-linecap="round" />
              <path d="M15 3.5V7M15 17V11" strokeWidth="1.5" stroke-linecap="round" />
              <path d="M9 20.5V17M9 7V13" strokeWidth="1.5" stroke-linecap="round" />
            </svg>
            <span className="item-text">Map</span>
          </button>
          <button onClick={() => handelMove(2,40,40)} className="item">
            <svg className="item-svg item-svg-active" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 11.6825C9.31371 8.10583 14.6863 8.10583 18 11.6825M8.00002 13.841C10.2092 11.4566 13.7909 11.4566 16 13.841M10 16C11.1046 14.8078 12.8955 14.8078 14 16"
                strokeWidth="1.5" stroke-linecap="round" />
              <path
                d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                strokeWidth="1.5" stroke-linecap="round" />
            </svg>
            <span className="item-text item-text-active">Home</span>
          </button>
          <button onClick={() => handelMove(3,60,20)} className="item">
            <svg className="item-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 17.5C14 16.0955 14 15.3933 14.3371 14.8889C14.483 14.6705 14.6705 14.483 14.8889 14.3371C15.3933 14 16.0955 14 17.5 14V14V14C18.9045 14 19.6067 14 20.1111 14.3371C20.3295 14.483 20.517 14.6705 20.6629 14.8889C21 15.3933 21 16.0955 21 17.5V17.5V17.5C21 18.9045 21 19.6067 20.6629 20.1111C20.517 20.3295 20.3295 20.517 20.1111 20.6629C19.6067 21 18.9045 21 17.5 21V21V21C16.0955 21 15.3933 21 14.8889 20.6629C14.6705 20.517 14.483 20.3295 14.3371 20.1111C14 19.6067 14 18.9045 14 17.5V17.5V17.5Z"
                strokeWidth="2" />
              <path
                d="M3 17.5C3 16.0955 3 15.3933 3.33706 14.8889C3.48298 14.6705 3.67048 14.483 3.88886 14.3371C4.39331 14 5.09554 14 6.5 14V14V14C7.90446 14 8.60669 14 9.11114 14.3371C9.32952 14.483 9.51702 14.6705 9.66294 14.8889C10 15.3933 10 16.0955 10 17.5V17.5V17.5C10 18.9045 10 19.6067 9.66294 20.1111C9.51702 20.3295 9.32952 20.517 9.11114 20.6629C8.60669 21 7.90446 21 6.5 21V21V21C5.09554 21 4.39331 21 3.88886 20.6629C3.67048 20.517 3.48298 20.3295 3.33706 20.1111C3 19.6067 3 18.9045 3 17.5V17.5V17.5Z"
                strokeWidth="2" />
              <path
                d="M3 6.5C3 5.09554 3 4.39331 3.33706 3.88886C3.48298 3.67048 3.67048 3.48298 3.88886 3.33706C4.39331 3 5.09554 3 6.5 3V3V3C7.90446 3 8.60669 3 9.11114 3.33706C9.32952 3.48298 9.51702 3.67048 9.66294 3.88886C10 4.39331 10 5.09554 10 6.5V6.5V6.5C10 7.90446 10 8.60669 9.66294 9.11114C9.51702 9.32952 9.32952 9.51702 9.11114 9.66294C8.60669 10 7.90446 10 6.5 10V10V10C5.09554 10 4.39331 10 3.88886 9.66294C3.67048 9.51702 3.48298 9.32952 3.33706 9.11114C3 8.60669 3 7.90446 3 6.5V6.5V6.5Z"
                strokeWidth="2" />
              <path d="M14 6.5H21"  strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.5 3V10"  strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className="item-text">Apps</span>
          </button>
          <button onClick={() => handelMove(4,80,0)} className="item">
            <svg className="item-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className="item-text">Search</span>
          </button>
          {/* Repeat for other buttons */}
          <div
            id="swimmer"
            className="swimmer"
            style={{ left: '40%', right: '40%' }}
          ></div>
        </nav>
      </div>
    );
  }

export default Navb;
