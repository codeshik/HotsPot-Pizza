import React, { useState, useEffect } from "react";

import Checkout from './Checkout';
import { Link,useNavigate } from "react-router-dom";


const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const navigate=useNavigate();

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs -  {price}</span>
      </div>

    <h1 className="topHeading">You can select 1 Veg or 1 Non-veg or 1 Cheese Toppings for free</h1>
    <form action="/action_page.php">
    <div className="vegToppings">
      <h3>Veg and Non-Veg Extra Toppings</h3>
      <div className="vegTop">

        <input type="radio" id="vegToppings1" name="fav_language" value="Onion"/>
        <label for="html">Onion</label><br/>
        <input type="radio" id="vegToppings1" name="fav_language" value="Corn"/>
        <label for="html">Corn</label><br/>
        <input type="radio" id="vegToppings1" name="fav_language" value="Tomato"/>
        <label for="html">Tomato</label><br/>
        <input type="radio" id="vegToppings1" name="fav_language" value="Capsicum"/>
        <label for="html">Capsicum</label><br/>
        <input type="radio" id="vegToppings1" name="fav_language" value="Pepper"/>
        <label for="html">Pepper</label><br/>
        <input type="radio" id="vegToppings1" name="fav_language" value="cheese"/>
        <label for="html">cheese</label><br/>
        <input type="radio" id="vegToppings1" name="fav_language" value="PlainChicken"/>
        <label for="html">Plain Chicken</label><br/>
        <input type="radio" id="vegToppings1" name="fav_language" value="CornRoastedChicken"/>
        <label for="html">Roasted Chicken</label><br/>
        <input type="radio" id="vegToppings1" name="fav_language" value="ChickenSalami"/>
        <label for="html">Chicken Salami</label><br/>
        <input type="radio" id="vegToppings1" name="fav_language" value="ChickenSausage"/>
        <label for="html">Chicken Sausage</label><br/>
        <input type="radio" id="vegToppings1" name="fav_language" value="ChickenPepperoni"/>
        <label for="html">Chicken Pepperoni</label><br/>
        

      </div>
    </div>
      </form>
      <button className="cod" onClick={()=>{
            alert("Order Successfully")
            navigate('/');
       } }>Cash on Delivery</button>
      <Link to='/Checkout'><button className="onlinePayment">Online Payment</button></Link>
    </article>
  );
};

export default Cart;