import React from 'react'

const Blog = () => {
  return (
    <React.Fragment>
        <section id="blog" className="blog">
    <h4>Latest Blog</h4>
    <div className="inner-blog">
        <div className="blog-content">
            <div className="in-blog">
                <div className="im">
                    <img src="assets/images/blog-1.jpg" alt="img"/>
                    <div className="in-blog-icon">
                        <a href="#"><i className="fas fa-calendar"></i>4th April</a>
                        <a href="#"><i className="fas fa-user"></i>Admin</a>
                    </div>
                </div>
                <div className="in-blog-content">
                    <h2>Pizza is too good.</h2>
                    <button className="btn">Read More</button>
                </div>
            </div>
        </div>
        <div className="blog-content">
            <div className="in-blog">
                <div className="im">
                    <img src="assets/images/blog-2.jpg" alt="img"/>
                    <div className="in-blog-icon">
                        <a href="#"><i className="fas fa-calendar"></i>3rd April</a>
                        <a href="#"><i className="fas fa-user"></i>Admin</a>
                    </div>
                </div>
                <div className="in-blog-content">
                    <h2>Amazing Pizza, Best Quality</h2>
                    <button className="btn">Read More</button>
                </div>
            </div>
        </div>
        <div className="blog-content">
            <div className="in-blog">
                <div className="im">
                    <img src="assets/images/blog-3.jpg" alt="img"/>
                    <div className="in-blog-icon">
                        <a href="#"><i className="fas fa-calendar"></i>2nd April</a>
                        <a href="#"><i className="fas fa-user"></i>Admin</a>
                    </div>
                </div>
                <div className="in-blog-content">
                    <h2>Yummy Pizza, We Loved It.</h2>
                    <button className="btn">Read More</button>
                </div>
            </div>
        </div>
    </div>
</section>
    </React.Fragment>
  )
}

export default Blog;