import React from 'react'


export const About = () => {
  return (
      <React.Fragment>
        <section className="about" id="about">
                <h4>About</h4>
                <div className="about-sec">
                    <div className="img">
                        <img src="assets/images/pizza1.jpg" alt="img"/>
                    </div>
                    <div className="about-content">
                        <h3>HotsPot Pizza</h3>
                        <p>Explore our tempting choice of delicious desserts. Available for delivery and collection. Given the evolving COVID-19 situation, we wanted to reassure you that the safety and wellbeing of customers and colleagues is always our top priority.</p>
                        <div className="about-inner">
                            <h5><i className="fas fa-arrow-alt-circle-right"></i>Good Quality</h5>
                            <h5><i className="fas fa-arrow-alt-circle-right"></i>Fresh Vegeytables</h5>
                            <h5><i className="fas fa-arrow-alt-circle-right"></i>Available 24X7</h5>
                            <h5><i className="fas fa-arrow-alt-circle-right"></i>Best Price</h5>
                            <h5><i className="fas fa-arrow-alt-circle-right"></i>Best Quality</h5>
                        </div>
                        <button className="btn">Read More</button>
                    </div>
                </div>
        </section>
      </React.Fragment>
    
  )
}
export default About;