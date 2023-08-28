import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

const Product = (props) => {
const {id , productName , price ,productImage} = props.data
const {addToCart , cartItems} = useContext(ShopContext)
const cartItemsAmount = cartItems[id]
  return (
    <div className='product'>
        <img src={productImage}/>
        <div className="description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <button className='addToCartBttn' onClick={() => addToCart(id)}>Add To Cart {cartItemsAmount > 0 && <>{cartItemsAmount}</>}</button>
        </div>
    </div>
  )
}

export default Product