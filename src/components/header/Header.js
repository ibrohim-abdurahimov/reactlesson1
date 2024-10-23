import React from 'react'
import "./Header.css"
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";


function Header() {
  return (
    <header className='header'>
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
          <div className='menu'>
            <div className="menu__icon">
              <IoSearch />
              <FaUser />
              <GrCart />
              <FaBars />
            </div>
          </div>

        </nav>
      </div>
    </header>
  )
}

export default Header