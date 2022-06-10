import React from 'react'
import {Link} from 'react-router-dom'

export const Home = () => {
  return (
    <React.Fragment>
      <section className="home" id="home">
            <div className="home-content">
                <div className="inner-content">
                    <h3>Welcome to HotsPot&nbsp;<i className="fas fa-pizza-slice"></i>&nbsp;Pizza</h3>
                    <p>Order a delicious pizza on the go, anywhere, anytime. HotsPot Pizza is happy to assist you with your home delivery. Every time you order, you get a hot and fresh pizza delivered at your doorstep in less than thirty minutes.</p>
                    <Link to='/menu'><button className="btn">Order Now</button></Link>
                    
                </div>
                <div className="inner-content-img">
                    <img src="assets/images/pizza.png" alt=""/>
                </div>
            </div>
      </section>
    </React.Fragment>
  )
}
export default Home;