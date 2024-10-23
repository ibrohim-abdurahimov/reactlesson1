import React from 'react'
import "./Recent.css"
import card1 from "../../assets/recent1.png"
import card2 from "../../assets/recent2.png"
import card3 from "../../assets/recent3.png"
import card4 from "../../assets/recent4.png"
import card5 from "../../assets/recent5.png"
import card6 from "../../assets/recent6.png"

function Recent() {
  return (
    <section className='recent'>
        <div className="container">
            <p className="recent__title">Most Recent</p>
            <div className="recent__wrapper">
                <div className="recent__card">
                    <div className="recent__card_img">
                        <img src={card1} alt="" />
                    </div>
                    <div className="recent__card_body">
                        <p className="recent__card_title">Still Standing Tall</p>
                        <p className="recent__card_desc">
                            Life begins at the end of your comfort zone.
                        </p>
                        <div className="recent__card_user top">
                            <p>William Wong</p>
                            <p>9/25/2015</p>
                        </div>
                    </div>
                </div>
                <div className="recent__card">
                    <div className="recent__card_img">
                        <img src={card2} alt="" />
                    </div>
                    <div className="recent__card_body">
                        <p className="recent__card_title">Sunny Side Up</p>
                        <p className="recent__card_desc">
                            No place is ever as bad as they tell you it’s going to be.
                        </p>
                        <div className="recent__card_user">
                            <p>Mat Vogels</p>
                            <p>9/25/2015</p>
                        </div>
                    </div>
                </div>
                <div className="recent__card">
                    <div className="recent__card_img">
                        <img src={card3} alt="" />
                    </div>
                    <div className="recent__card_body">
                        <p className="recent__card_title">Water Falls</p>
                        <p className="recent__card_desc">
                            We travel not to escape life, but for life not to escape us.
                        </p>
                        <div className="recent__card_user">
                            <p>Mat Vogels</p>
                            <p>9/25/2015</p>
                        </div>
                    </div>
                </div>
                <div className="recent__card">
                    <div className="recent__card_img">
                        <img src={card4} alt="" />
                    </div>
                    <div className="recent__card_body">
                        <p className="recent__card_title">Through the Mist</p>
                        <p className="recent__card_desc">
                            Travel makes you see what a tiny place you occupy in the world.
                        </p>
                        <div className="recent__card_user">
                            <p>William Wong</p>
                            <p>9/25/2015</p>
                        </div>
                    </div>
                </div>
                <div className="recent__card">
                    <div className="recent__card_img">
                        <img src={card5} alt="" />
                    </div>
                    <div className="recent__card_body">
                        <p className="recent__card_title">Awaken Early</p>
                        <p className="recent__card_desc">
                            Not all those who wander are lost.
                        </p>
                        <div className="recent__card_user top">
                            <p>Mat Vogels</p>
                            <p>9/25/2015</p>
                        </div>
                    </div>
                </div>
                <div className="recent__card">
                    <div className="recent__card_img">
                        <img src={card6} alt="" />
                    </div>
                    <div className="recent__card_body">
                        <p className="recent__card_title">Try it Always</p>
                        <p className="recent__card_desc">
                            The world is a book, and those who do not travel read only one page.
                        </p>
                        <div className="recent__card_user">
                            <p>Mat Vogels</p>
                            <p>9/25/2015</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Recent