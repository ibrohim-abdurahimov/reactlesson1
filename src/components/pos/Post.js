import React from 'react'
import "./Post.css"

function Post() {
  return (
    <section className='post'>
        <div className="container">
            <p className="post__title">
                Featured Posts
            </p>
            <div className="post__wrapper">
                <div className="post__card one">
                    <p className="post__card_title">The Road Ahead</p>
                    <p className="post__card_desc">The road ahead might be paved - it might not be.</p>
                    <div className="post__card_body">
                        <p className="post__card_user">Mat Vogels</p>
                        <p className="post__crad_data">September 25, 2015</p>
                    </div>
                </div>
                <div className="post__card two">
                    <p className="post__card_title">From Top Down</p>
                    <p className="post__card_desc">Once a year, go someplace you’ve never been before.</p>
                    <div className="post__card_body">
                        <p className="post__card_user">William Wong</p>
                        <p className="post__crad_data">September 25, 2015</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Post