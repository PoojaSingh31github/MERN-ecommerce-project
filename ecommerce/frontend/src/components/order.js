import React from 'react'
import './order.css'

const Order = () => {
  return (
    <div className='PlaceOrder m-4'>
    <div class="Ordercard ">
      <p> your orderlist  <i class="fa-solid fa-cart-arrow-down orderIcon"></i></p>
   
  <div class="card__content">
  <div class="card-img"></div>
  <div class="card-info">
    <p class="text-title">Your Orders </p>
    <p class="text-body">Product description and details</p>
  </div>
  <div class="card-footer">
  <span class="text-title">Total amount</span>
</div>
<button className='Orderbutton m-4'>Place Order</button>
  </div>
</div>
</div>

  )
}

export default Order;