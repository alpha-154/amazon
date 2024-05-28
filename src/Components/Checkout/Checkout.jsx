import React from 'react'
import "./Checkout.css"
import adImage  from "../../assets/ad.jpg"
import SubTotal from '../SubTotal/SubTotal'
import { useStateValue } from '../../contextAPI/StateProvider'
import CheckoutProduct from './CheckoutProduct'



function Checkout() {

  const [{basket, user}, dispatch] = useStateValue(); 

  return (
    <div className='checkout'>

       <div className="checkout-left">
          <img src={adImage} alt="" className='checkout-ad'/>

          <div>
            <h3>Hello, {user?.email} 
            </h3>
            <h2 className='checkout-title'>Your Shopping Basket</h2>
              
            {
              basket.map((item) => (
                <CheckoutProduct 
                   key={item.id}
                   id = {item.id} 
                   title = {item.title}
                   image = {item.image}
                   price = {item.price}
                   rating = {item.rating}
                 />
              ))
            }

          </div>
       </div>

       <div className="checkout-right">
          <SubTotal/>
       </div>

    </div>
  )
}

export default Checkout
