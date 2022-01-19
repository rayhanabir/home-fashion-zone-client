import React from 'react';
import { useHistory } from 'react-router-dom';
import './product.css';

const Product = (props) => {
    const {_id, name, image, description, price} = props.product;
    const history = useHistory()
    const handleClick = (id) =>{
        history.push(`/book/${_id}`)
    }
    return (
        <div>
           <div className="product-card shadow text-center p-3">
                <img src={image} alt="" />
                <h4>{name}</h4>
                <h3 className='text-danger'>${price}</h3>
                <p>{description}</p>
                <button onClick={()=>handleClick(_id)} className='buy-btn'>Buy Now</button>
           </div>
        </div>
    );
};

export default Product;