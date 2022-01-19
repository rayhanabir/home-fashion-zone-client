import React from 'react';
import { useHistory } from 'react-router-dom';

const HomeProduct = (props) => {
    const{name, price, image, description,_id} = props.pd;
    const history = useHistory()
    const handleClick = (id) =>{
        history.push(`/book/${id}`)
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

export default HomeProduct;