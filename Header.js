import React from "react";
import {Link} from 'react-router-dom'


const Header = ({setShow, size }) =>{
    return(
    <>
     <header className="head">   
        <Link to='/'><h1>HotsPot&nbsp; <i className="fas fa-pizza-slice"></i>&nbsp;Pizza</h1></Link>                <nav className="navbar">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/service'>Service</Link>
                    <Link to='/menu'>Menu</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/Contact'>Contact</Link>
                </nav>
                <div className="side-bar">
                    <div className="searchBox">
                        <input type="text" className="searchText" borderradius="4px" placeholder="Search Here..."/>
                        <a href="#" className="searchBtn" />
                        <i className="fas fa-search" style={{fontSize:"10px" , borderradius:"4px", marginLeft: "-31px"}} id="search"></i>
                    </div>
                    <div className="loginBox">
                    
                   <Link to='/login'><i className="fas fa-user" id="user"  style={{fontSize:"10px", borderRadius:"4px", marginLeft: "-7px"}}></i></Link>
                    </div>
                   
                </div>
                 
                <div className="add-to-cart" onClick={() => setShow(false)}>
                    <span>
                    <i class="fas fa-cart-plus"></i>
                    </span>
                    <span>{size}</span>
                </div>
        </header>
        
    </>
    )
}



{/* <div className="searchBox">
                        <input type="text" className="searchText" placeholder="Type to Search..."/>
                        <a href="#" className="searchBtn"></a>
                        <i className="fas fa-search" id="search"></i>
</div> */}


export default Header;