// import React, { useState } from 'react';
// import Server from './Components/Server';
// import Header from './Components/Header';
// import Cart from './Components/Cart';

// const Menu = () => {
//   const[show, setShow] = useState(true);
//   const [cart, setCart] = useState([]);

//   const handleClick = (item) => {
//     if(cart.indexOf(item) !== -1) return;
//     setCart([...cart, item]);
//   };

//   const handleChange = (item, d) => {
//     const ind = cart.indexOf(item);
//     const arr = cart;
//     arr[ind].amount += d;

//     if(arr[ind].amount === 0 ) arr[ind].amount = 1;
//     setCart([...arr]);
//   };

  
//   return (
//     <>
//       <Header setShow={setShow} size={cart.length} />
//       { show ? (
//         <Server handleClick={handleClick} />
//         ) : (
//           <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
//         )}
//     </>
//   );

// };

// export default Menu;


import React from 'react'

const Menu = () => {
  return (
<React.Fragment>
            <section className="menu" id="menu">
        <h4>Our Menu</h4>
        <div className="menu-content">
            <div className="in-box">
                {/* <i className="far fa-heart"></i> */}
                {/* <img src="assets/images/veg.png" alt="" className="veg-icon"/> */}
                <img src="assets/images/pizza-v1.jpg" alt=""/>
                <div className="in-content">
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <h2>Margherita Sushi Pizza</h2>
                        <div className="price">Rs.349</div>
                         {/* <button className="btn">Add to Cart <i className="fas fa-plus-circle"></i></button>  */}
                    </div>
                </div>
            </div>
            <div className="in-box">
                {/* <i className="assets/images/far fa-heart"></i> */}
                {/* <img src="assets/images/veg.png" alt="" className="veg-icon"/> */}
                <img src="assets/images/pizza-v2.jpg" alt=""/>
                <div className="in-content">
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <h2>Paneer Special Pizza</h2>
                        <div className="price">Rs.299</div>
                        {/* <button className="btn">Add to Cart <i className="fas fa-plus-circle"></i></button> */}
                    </div>
                </div>
            </div>
            <div className="in-box">
                {/* <i className="far fa-heart"></i> */}
                {/* <img src="assets/images/veg.png" alt="" className="veg-icon"/> */}
                <img src="assets/images/pizza-v3.jpg" alt=""/>
                <div className="in-content">
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <h2>Sausage and Roasted Red Pepper Pizza</h2>
                        <div className="price">Rs.325</div>
                        {/* <button className="btn">Add to Cart <i className="fas fa-plus-circle"></i></button> */}
                    </div>
                </div>
            </div>
            
            <div className="in-box">
                {/* <i className="far fa-heart"></i> */}
                {/* <img src="assets/images/veg.png" alt="" className="veg-icon"/> */}
                <img src="assets/images/pizza-v1.jpg" alt=""/>
                <div className="in-content">
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <h2>Margherita Sushi Pizza</h2>
                        <div className="price">Rs.349</div>
                        {/* <button className="btn">Add to Cart <i className="fas fa-plus-circle"></i></button> */}
                    </div>
                </div>
            </div>
            <div className="in-box">
                {/* <i className="far fa-heart"></i> */}
                {/* <img src="assets/images/veg.png" alt="" className="veg-icon"/> */}
                <img src="assets/images/pizza-v1.jpg" alt=""/>
                <div className="in-content">
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <h2>Margherita Sushi Pizza</h2>
                        <div className="price">Rs.349</div>
                        {/* <button className="btn">Add to Cart <i className="fas fa-plus-circle"></i></button> */}
                    </div>
                </div>
            </div>
            <div className="in-box">
                {/* <i className="far fa-heart"></i> */}
                {/* <img src="assets/images/nonVeg.png" alt="" className="veg-icon"/> */}
                <img src="assets/images/pizza-v1.jpg" alt=""/>
                <div className="in-content">
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <h2>Margherita Sushi Pizza</h2>
                        <div className="price">Rs.349</div>
                        {/* <button className="btn">Add to Cart <i className="fas fa-plus-circle"></i></button> */}
                    </div>
                </div>
            </div>
            <div className="in-box">
                {/* <i className="far fa-heart"></i> */}
                {/* <img src="assets/images/nonVeg.png" alt="" className="veg-icon"/> */}
                <img src="assets/images/pizza-v1.jpg" alt=""/>
                <div className="in-content">
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <h2>Margherita Sushi Pizza</h2>
                        <div className="price">Rs.349</div>
                        {/* <button className="btn">Add to Cart <i className="fas fa-plus-circle"></i></button> */}
                    </div>
                </div>
            </div>
            <div className="in-box">
                {/* <i className="far fa-heart"></i> */}
                {/* <img src="assets/images/nonVeg.png" alt="" className="veg-icon"/> */}
                <img src="assets/images/pizza-v1.jpg" alt=""/>
                <div className="in-content">
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <h2>Margherita Sushi Pizza</h2>
                        <div className="price">Rs.349</div>
                        {/* <button className="btn">Add to Cart <i className="fas fa-plus-circle"></i></button> */}
                    </div>
                </div>
            </div>
            <div className="in-box">
                {/* <i className="far fa-heart"></i> */}
                {/* <img src="assets/images/nonVeg.png" alt="" className="veg-icon"/> */}
                <img src="assets/images/pizza-v1.jpg" alt=""/>
                <div className="in-content">
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <h2>Margherita Sushi Pizza</h2>
                        <div className="price">Rs.349</div>
                        {/* <button className="btn">Add to Cart <i className="fas fa-plus-circle"></i></button> */}
                    </div>
                </div>
            </div>
        </div>
</section>
</React.Fragment>
  )
}

export default Menu;