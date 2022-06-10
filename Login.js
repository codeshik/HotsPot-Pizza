import React,{useEffect, useState} from 'react'
import {Link,useNavigate}from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [username,setUsername]=useState([])  
    const [password,setPassword]=useState([])
    const [items, setItems] = useState([]);

    const navigate=useNavigate();
    const getData = () => {
    
        axios.post('http://localhost:9000/auth/api/users/login',{
          username,
          password
        }).then(res => {console.log('Checking Credential',res) 
        if(res.data.success===true){
            alert("You are now logged in successfully.")
            navigate('/AddCart');
     }
        }
        )
        .catch(err=> console.log(err))

      }

  return (
    <>
    <div class="registrationBody">
        <div class="container" id="container">
                <form action="#">
                    <h1>Sign In</h1>
                    <span>Don't have an account?<Link to='/signup'><h4>Register.</h4></Link></span>
                    <div class="social-container">
                    <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook"></i></a>
                    <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                    <a href="https://accounts.google.com/servicelogin"target="_blank"><i className="fa-brands fa-google-plus-g"></i></a>
                    </div>
                        <span>or use your account</span>
                        <input type="email" name="username"  onChange={(e)=>setUsername(e.target.value)} placeholder="username or you@gmail.com" />
                        <input type="password" name="password"  onChange={(e)=>setPassword(e.target.value)} placeholder="Password"  />
                        <Link to='/signup'><a href="#">Forgot Your Password</a></Link>   
                        <button onClick={getData}>SignIn</button>
                        {/* <button onClick={getData}>SignIn as Admin</button> */}
                        <div>By continuing, you agree to HotsPot's Terms of Use and Privacy Policy.</div>
                </form>
            </div>
    </div>
    </>
  )
}

export default Login

{/* <div class="form-container sign-up-container">
                <form action="">
                <h1>Create Account</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fa fa-facebook"></i></a>
                        <a href="#" class="social"><i class="fa fa-google"></i></a>
                        <a href="#" class="social"><i class="fa fa-linkedin"></i></a>
                    </div>
                <span>or use your email for registration</span>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone Number"/>
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="email" name="email" placeholder="you@gmail.com"/>
                    <input type="password" name="password" placeholder="Password"/>
                <button>SignUp</button>
                </form>
            </div> 
        
        
        
        
        <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button class="ghost" id="signIn">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your details and start journey with us</p>
                        <button class="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        
        */}