import React from 'react'
import './Product.css';

const products = [
  {
    name: "Shirt Checked",
    price: 900,
    imgUrl: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8e%2F1a%2F8e1a2d5a78e40317035ba2ae6b08cf5b6ca47e29.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
  },
  {
    name: "Dri Fit Shirt Nike",
    price: 1200,
    imgUrl: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5eeb2b6d-0c09-4d68-8039-3e00b0666686/sportswear-max90-t-shirt-2gsJW9.png"
  },
  {
    name: "Denim Jeans",
    price: 2000,
    imgUrl: "https://5.imimg.com/data5/LM/KL/MY-7086196/denim-3-500x500.jpg"
  },
]
const Product = () => {
  return (
    <div>
      <h1 className='main__title'>Products</h1>
      <div className='product__container'>
        {products && products.map((product) => (
          <div className='product__container-card'>
            <img src={product.imgUrl} alt="product-img" />
            <h2>{product.name}</h2>
            <p>Rs.{product.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Product;