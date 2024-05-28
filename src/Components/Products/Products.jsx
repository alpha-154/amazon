import React from 'react'
import "./Products.css"
import { useStateValue } from '../../contextAPI/StateProvider'


function Product({id, title, price, rating, image}) {

  const [{basket} , dispatch] = useStateValue();
  console.log('this is basket>>>', basket);
  //console.log("basket index>>>", basket[2]);
  
 
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<p key={i}>⭐️</p>);
    }
    return stars;
  };

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      }
    });
    
  }

  return (
    <div className='product'>

       <div className='product_info'>
          <p>{title}</p>
          <p className='product_price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
            {renderStars(rating)}
          </div>
       </div>

        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
