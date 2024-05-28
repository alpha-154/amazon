import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from '../../contextAPI/StateProvider';



function CheckoutProduct({id, image, title, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
          stars.push(<p key={i}>⭐️</p>);
        }
        return stars;
      };

    const removeFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: id,
        })
    };

  return (
    <div className='checkoutProduct'>
        <img src={image} className='checkoutProduct-img' alt="" />

        <div className="checkoutProduct-info">
            <p className='checkoutProduct-title'>{title}</p>
            <p className='checkoutProduct-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct-rating">
               {renderStars(rating)} 
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct
