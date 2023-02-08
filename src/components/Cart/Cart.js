import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total,product)=>{
            return total+product.price;
    },0)
    return (
        <div className='row p-4 border border mt-4'>
            <div className="col-12 text-center">
            <h5>Summary</h5>
            </div>
            <hr />
           <div className="col-6">
           <p>Enrolled Course:</p>
           </div>
           <div className="col-6 text-end">
           <p>{cart.length}</p>
           </div>
           <div className="col-6">
           <p>Total Price:</p>
           </div>
           <div className="col-6 text-end">
           <p>{totalPrice.toFixed(2)}</p>
           </div>
            
           
            <button className='btn btn-success'>Review Your Order</button>
            
        </div>
    );
};

export default Cart;