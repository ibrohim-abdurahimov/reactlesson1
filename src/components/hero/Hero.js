import React from 'react'
import "./Hero.css"

function Hero() {
  return (
    <section className='hero'>
        <div className="container">
            <h1 className="hero__title">Let's do it together.</h1>
            <p className="hero__desc">
                We travel the world in search of stories. Come along for the ride.
            </p>
            <div className="hero__btn">
                <button>View Latest Posts</button>
            </div>
        </div>
    </section>
  )
}

export default Hero