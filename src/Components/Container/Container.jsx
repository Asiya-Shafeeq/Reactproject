import React from 'react'
import './Container.css';
import conatiner_right_img from '../Assets/bg-5.jpg'

function Container() {
  return (
    <div className='container-box'>
      <div className="container_left">
        <h1>WE MADE YOUR EVERYDAY FASHION BETTER!</h1>
        <p>In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</p>
        <button>Shop Now</button>
      </div>
      <div className="container_right">
        <img src={conatiner_right_img} alt="" />
      </div>
    </div>
  )
}

export default Container
