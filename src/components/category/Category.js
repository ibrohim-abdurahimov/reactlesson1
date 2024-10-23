import React from 'react'
import "./Category.css"

function Category() {
  return (
    <section className='category'>
        <div className="container">
            <ul className="category__collection">
                <li className="category__item">
                    <a href="#" className="category__link">
                        <span>Nature</span>
                    </a>
                </li>
                <li className="category__item">
                    <a href="#" className="category__link">
                        <span>Photography</span>
                    </a>
                </li>
                <li className="category__item">
                    <a href="#" className="category__link">
                        <span>Relaxation</span>
                    </a>
                </li>
                <li className="category__item">
                    <a href="#" className="category__link">
                        <span>Vacation</span>
                    </a>
                </li>
                <li className="category__item">
                    <a href="#" className="category__link">
                        <span>Travel</span>
                    </a>
                </li>
                <li className="category__item">
                    <a href="#" className="category__link">
                        <span>Adventure</span>
                    </a>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Category