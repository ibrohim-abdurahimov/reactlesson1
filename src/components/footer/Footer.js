import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
            <p className="footer__title">Stay in Touch</p>
            <div className="footer__email">
                <div className="footer__inp">
                    <input type="email" placeholder='Enter your email address' />
                </div>
                <div className="footer__btn">
                    <button>Submit</button>
                </div>

            </div>
        </div>
        <div className="footer__body">
            <div className="container">
                <nav className="navbar">
          <p className="navbar__logo">Escape.</p>
          <ul className="navbar__collection">
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                <span>Home</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                <span>Categories</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                <span>About</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
            </div>
        </div>
    </footer>
  )
}

export default Footer