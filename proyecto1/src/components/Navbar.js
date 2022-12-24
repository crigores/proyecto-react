/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react'
import '../assets/styles/Navbar.css'

function Navbar ({ image, navlinks, color }) {
  return (
    <nav style={{ backgroundColor: color }} className='navbar'>
      <img 
        src={image}
        alt='Banner'
        className='logo'
      />
      <ul className='elements'>
        {
          navlinks.map(( element, index) => {
            return (
              <li key={index} className='element'>
                <a href={element.route}>
                  {element.label}
                </a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default Navbar
