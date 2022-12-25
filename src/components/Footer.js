import React from 'react'
import { TbBrandTwitter, TbBrandInstagram, TbBrandPinterest, TbBrandReddit, TbBrandTiktok, TbBrandFacebook, TbBrandDiscord, TbBrandTelegram } from 'react-icons/tb'
import '../assets/styles/Footer.css'

// eslint-disable-next-line react/prop-types
function Footer ({ image }) {
  return (
    <>
      <body>
        <footer className='content-foo'>
          <img
            src={image}
            alt='Banner'
            className='logo'
          />
          <div className='social-icons-container'>
            <a href='#'><TbBrandTwitter color='black' className='social-icon' /></a>
            <a href='#'><TbBrandInstagram color='black' className='social-icon' /></a>
            <a href='#'><TbBrandFacebook color='black' className='social-icon' /></a>
            <a href='#'><TbBrandDiscord color='black' className='social-icon' /></a>
            <a href='#'><TbBrandTelegram color='black' className='social-icon' /></a>
            <a href='#'><TbBrandTiktok color='black' className='social-icon' /></a>
            <a href='#'><TbBrandReddit color='black' className='social-icon' /></a>
            <a href='#'><TbBrandPinterest color='black' className='social-icon' /></a>
          </div>
          <ul className='footer-menu-container'>
            <li className='text'>Legal</li>
            <li className='text'>Privacy Policy</li>
            <li className='text'>Cookies Policy</li>
            <li className='text'>Quality Policy</li>
            <li className='text'>Blog</li>
            <li className='text'>Contact</li>
            <li className='text'>FAQs</li>

          </ul>

          <span className='cont-copyright'>2022, "MESSI" todos los derechos reservados</span>
        </footer>
      </body>

    </>
  )
}

export default Footer
