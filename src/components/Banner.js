/* eslint-disable react/prop-types */
import React from 'react'
import '../assets/styles/banner.css'

function Banner ({ title, description, image, button }) {
  return (
    <div className='banner'>
      {/* <img
            src={image}
            alt='Banner'
            className='banner-img'
          /> */}
      <h1>
        <span className='banner-title'>{title}</span>
      </h1>

      <p className='banner-dscrip'>{description}</p>

      <a href='#' className='banner-btn'>{button}</a>
    </div>
  )
}

export default Banner
