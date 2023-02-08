import React, { useEffect, useState } from 'react';
import fakeProducts from '../../fake-course/fakeCourse.json';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
const [products,setProducts] = useState([]);

useEffect(()=> {
    setProducts(fakeProducts);
},[]);

const [cart, setCart] = useState([]);
const addCourseHandler = (product)=> {
    const newCart = [...cart,product];
    setCart(newCart);
}

    return (
        <div className='shop-container container-fluid mt-5 p-4'>
           <div className="row">
            <div className="col-md-9 product-container">
                    <div className="row">
                    {
                    products.map(product=> <Product product={product} addCourseHandler={addCourseHandler}></Product>)
                    }
                    </div>
            </div>
            <div className="col-md-3 cart-container">
                <div className="cart-details">
                <Cart cart={cart}></Cart>
                </div>
            </div>
                
           </div>
            
        </div>
    );
};

export default Shop;