import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Service from './Components/Service';
import Footer from './Components/Footer';
import Login from './Components/Login';
import React from 'react';
import SignUp from './Components/SignUp';
import AddCart from './Components/AddCart';
import Checkout from './Components/Checkout';




function App() {
  return( 
    <>
    <Router>
      <Header />
        <Routes>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="/about" element={ <About /> }></Route>
            <Route path="/service" element={ <Service /> }></Route>
            <Route path="/menu" element={ <Menu /> }></Route>
            <Route path="/blog" element={ <Blog /> }></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/Checkout" element={<Checkout/>}></Route>
            <Route path="/AddCart" element={<AddCart/>}></Route>
        </Routes>
        <Footer/>
    </Router>
    </> 
);
}

export default App;
