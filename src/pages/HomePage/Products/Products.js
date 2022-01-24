import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import HomeProduct from '../HomeProduct/HomeProduct';
import './Products.css'

const Products = () => {
    const [homeProducts, setHomeProducts] = useState([]);
    const history = useHistory()
    useEffect(()=>{
        fetch('https://aqueous-journey-65504.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setHomeProducts(data));
    },[])

    const limitProducts = homeProducts.slice(0, 6);
    const handleAllProduct = () =>{
        history.push('/products')
    }


    return (
        <>
           <Container>
                <div className="home-product-container">
                    <h2 className='text-danger text-center mt-5'>Our <span className='text-danger'
                    >Products</span></h2>
                    <div className="six-products mb-4">
                        {
                            limitProducts.map(pd =><HomeProduct key={pd._id} pd={pd}></HomeProduct>)
                        }
                    </div>
                    <button onClick={handleAllProduct} className='d-block m-auto more-product-btn'>More Products</button>
                </div>   
            </Container> 
        </>
    );
};

export default Products;