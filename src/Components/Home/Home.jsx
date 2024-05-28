import React, { useEffect, useState } from 'react'
import "./Home.css"
import heroImg from "../../assets/hero.jpg"
import Product from '../Products/Products'
import bookImg from "../../assets/book.jpeg"

function Home() {
  // Initialize state for data
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setData(data); // Update state with fetched data
        console.log(data);
      })
  }, []);

  return (
    <div className='home'>

      <div className='home_container'>
        <img src={heroImg} alt='' className='home_img' />

        <div className='home_row'>
          {data.length > 0 ? (
            data.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                rating={Math.floor(product.rating.rate)}
                image={product.image}
              />
            ))
          ) : (
            "Data is loading"
          )}
        </div>
      </div>
      
    </div>
  )
}

export default Home
