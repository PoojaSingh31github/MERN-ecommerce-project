import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cart.css';

const CartCom = () => {
  const [cartData, setCartData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(1);

  const setIncrease = () => {
    amount < 5 ? setAmount(amount + 1) : setAmount(5);

  }
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }

  const Deletecart = () => {
     
  }

  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + localStorage.getItem('token'),
      },
    };
    const fetchCartData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/cartByuserId', config);
        console.log(response);
        setCartData(response.data.items);
        setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    };
    fetchCartData();
  }, []);
  return (
    <div class="master-container m-4">
      <div class="card cart">
        <label class="title">Your cart</label>
        <div class="products">
          {cartData ? (
            cartData.map((product) => {
              return (
                <div key={product.product._id} class="product">
                  <div>
                    <span>{product.product.name}</span>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <img height={70} width={110} src={product.product.image} /> <i class="fa-solid fa-trash-can  "></i>
                  </div>
                  <div class="quantity">
                    <button>
                      <i class="fa-solid fa-minus" onClick={() => setDecrease(product.product._id)}></i>
                    </button>
                    <label key={product.product._id}>{amount}</label>
                    <button>
                      <i class="fa-solid fa-plus" onClick={() => setIncrease(product.product._id)}></i>
                    </button>
                  </div>
                  <label class="price small"><strong>Price </strong> ${product.product.price}</label>
                  <label class="price small"><strong>Sub-Total </strong> ${(product.product.price * product.quantity)}</label>

                </div>
              )
            }

            )) : (<p>Loading...</p>)}
        </div>
      </div>
      <div class="card coupons">
        <label class="title">Apply coupons</label>
        <form class="form">
          <input type="text" placeholder="Apply your coupons here" class="input_field" />
          <button>Apply</button>
        </form>
      </div>
      <div class="card checkout">
        <label class="title">Checkout</label>
        <div class="details">
          <span>Your cart subtotal:</span>
          <span>47.99$</span>
          <span>Discount through applied coupons:</span>
          <span>3.99$</span>
          <span>Shipping fees:</span>
          <span>4.99$</span>
        </div>
        <div class="checkout--footer">
          <label class="price"><sup>$</sup>57.99</label>
          <button class="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};
export default CartCom;
