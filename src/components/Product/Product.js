import React from 'react';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Product.css';

const Product = (props) => {
    const {url,title,description,rating,price} = props.product;
    const addCourseHandler = props.addCourseHandler;
    return (
       
        <div className='product-details col-md-4 p-4 '>
            <div className='shadow p-3 mb-5 bg-white rounded'>
            <img src={url} alt="" className='img-fluid mb-3'/>
            <h5>{title}</h5>
            <p><small>{description}</small></p>
            <p className='rating'>{rating} <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> </p>
            <h5>${price}</h5>
            <button className='btn btn-success' onClick={()=>addCourseHandler(props.product)}>Enroll Now</button>
            </div>

        </div>
        
    );
};

export default Product;