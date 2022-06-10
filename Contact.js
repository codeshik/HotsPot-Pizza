import React,{useEffect, useState} from 'react'
import axios from 'axios'


const Contact = () => {
    const [feedback]=useState([])

    const submitFeedback = () =>{
        axios.post('http://localhost:8095/api/v1/feedbacks',{
            feedback
        }).then(res => {console.log('Checking Feedback',res)
        if(res.data===true){
            alert("we got your feedback")
        }
    }
        )
        .catch(err=> console.log(err))
    }
  return (
    <React.Fragment>
        <footer className="contact" id="contact">
    <div className="contact-sec">
        <div className="contact-inner">
            <div className="contact-inner-col">
                <img src="assets/images/logo.png" alt="img" className="image"/>
            </div>
            <div className="contact-inner-col">
                <h1>Contact US&nbsp;<i className="fa-solid fa-paper-plane"></i></h1>
                <p>Cognizant Technology Solutions, Unitech Infospace, DH Block(Newtown), Action Area I, Newtown, Kolkata, West Bengal 700156
                </p>
                <p>We Want to Hear From You, Write Us:</p>
                <form action="#" id="" method="get">
                <   input type="text" name="name" id=" " placeholder="Please Enter Your Name" required/>
                    <input type="email" name="name" id=" " placeholder="Please Enter Your Email ID" required/>
                    {/* <textarea name="" id="" cols="10" rows="8" placeholder="If you have any comments, we'd love to hear it."></textarea> */}
                    <input type="text" name="name" id=" " placeholder="Please Enter Your Subject" required/>
                    <input type="text" name="name" id=" " cols="10" rows="8" placeholder="If you have any comments, we'd love to hear it." required/>                     
                    <button className="btn" onClick={submitFeedback}>Submit</button>
                </form>
            </div>
        </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14736.485770099569!2d88.4823129!3d22.5745608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x94c3cd5abd4903db!2sCognizant%20Technology%20Solutions!5e0!3m2!1sen!2sin!4v1653726383842!5m2!1sen!2sin"
 width="100%" height="250" frameBorder="0" allowFullScreen></iframe>
</footer>
    </React.Fragment>
  )
}

export default Contact