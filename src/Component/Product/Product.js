import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = ( { handleAddtoCart, product}) => {
    // const  { handleAddtoCart, product} = props;
    const { name, img, seller, ratings, price } = product;



    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
                <p className='product-name'>Name: {name}</p>
                <p>Price : ${price}</p>
                <p><small>Seller : {seller}</small></p>
                <p><small>Ratings : {ratings}</small> Stars</p>
            </div>

            <button onClick={()=>handleAddtoCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

            </button>
        </div>
    );
};

export default Product;