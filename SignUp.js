import React,{useEffect, useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  
    

    // async function postdata(){
    //     let info={email,name,phone,password,confirmPassword}
    //     console.warn(info);

    //     let result=await fetch("http://localhost:9000/auth/api/users/register",{
    //         method:'POST',
    //         body:JSON.stringify(info),
    //         headers:{
    //             "Content-Type":'application/json',
    //             "Accepet":'application/json'
    //         }
    //     })
    //     result=await result.json()
    //     localStorage.setItem("user-info",JSON.stringify(result))
    // }

    const [username,setUsername]=useState([])   
    const [fullName,setFullName]=useState([])
    const [phoneNumber,setPhoneNumber]=useState([])  
    const [password,setPassword]=useState([])
    const [confirmPassword,setConfrimPassword]=useState([])
    const navigate=useNavigate();

      const postData = () => {
        axios.post('http://localhost:9000/auth/api/users/register',{
          username,
          fullName,
          phoneNumber,
          password,
          confirmPassword
        }).then(res => {console.log('Checking Credential',res) 
        // if(res.data.success===true){
        //     alert("Registration successfully");
        // }
        navigate('/login');
        }
        )
        .catch(err=>console.log(err))
      }

  return (
    <>
      <div className="SignUpBody">
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Sign Up</h1>
              <span>
                Already a user?
                <Link to="/login">
                  <h4>Login.</h4>

                </Link>
              </span>
              <div className="social-container">
                <a href="https://www.facebook.com/" target="_blank">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com/" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://accounts.google.com/servicelogin"
                  target="_blank"
                >
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type="email" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="username or you@gmail.com" required/>

              <input type="text" name="fullName" value={fullName} onChange={(e)=>setFullName(e.target.value)} placeholder="Full Name" required/>
              <input
                type="tel"
                id="phone"
                name="phoneNumber" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}
                placeholder="Phone Number" pattern="[7-9]{1}[0-9]{9}" required
              />
              <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required/>
              <input
                type="password"
                name="password" value={confirmPassword} onChange={(e)=>setConfrimPassword(e.target.value)}
                placeholder="Confirm Password" required
              />
              {/* <textarea name="" id="" cols="55" rows="8" placeholder="Enter your Address" required></textarea> */}
              <button onClick={postData}>SignUp</button>
              {/* <button onClick={postData}>SignUp as Admin</button> */}
              <div>By continuing, you agree to HotPot's Terms of Use and Privacy Policy.</div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

// "http://localhost:9000/auth/api/users/register"