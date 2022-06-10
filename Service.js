import React from 'react'

const Service = () => {
  return (
    <React.Fragment>
        <section className="service" id="service">
    <h4>Service</h4>
    <div className="service-content">
        <div className="inner-box">
            <img src="assets/images/s1.jpg" alt=""/>
            <h2>Free Delivery</h2>
            <p>When you buy an item on HotsPot Pizza, you are eligible for Free delivery on subsequent orders on all Fulfilled by HotsPot items for the next 30 minuets.</p>
            <button className="btn">Read More</button>
        </div>
        <div className="inner-box">
            <img src="assets/images/s2.png" alt=""/>
            <h2>Online Payment</h2>
            <p>Pay on Delivery (POD) includes Cash on Delivery (COD) as well as additional digital payment facilities via diffenent SMS Pay link. And All prices mentioned on the websit eare exclusive of taxes.</p>
            <button className="btn">Read More</button>
        </div>
        <div className="inner-box">
            <img src="assets/images/s3.png" alt=""/>
            <h2>Fresh Food</h2>
            <p>When you order a HotsPot Pizza, what you get is the joy eating it the same way you would eat it in the store – fresh, tasty and hot! Keeping your pizza hot and delivering hot pizzas to you is one of the great strengths of HotsPot Pizza.</p>
            <button className="btn">Read More</button>
        </div>
    </div>
</section>
    </React.Fragment>
  )
}

export default Service;