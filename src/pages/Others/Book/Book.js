import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useEffect } from 'react';
import {  Alert, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Book.css';

const Book = () => {
    const {user} = useAuth()
    const initialCustomerInfo ={
        name:user.displayName,
        email:user.email
    };
    const [singleProduct, setSingleProduct] = useState({});
    const [customerData, setCustomerData] = useState(initialCustomerInfo)
    const [productCount, setProductCount] = useState(1)
    const [orderSuccess, setOrderSuccess] = useState(false)
    const {productId} = useParams();
    
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${productId}`)
        .then(res => res.json())
        .then(data => setSingleProduct(data))
    },[])
    const {name, price, image, description} = singleProduct;
    const handleIncrease = () => setProductCount(productCount + 1)
    const handleDecrease = () => productCount > 1 ? setProductCount(productCount - 1) : productCount;
    const totalPrice = productCount * price;

    const handleOnblur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newCustomerData = {...customerData}
        newCustomerData[field] = value;
        setCustomerData(newCustomerData)
    }

    const handleOrderSubmit = (e) =>{
            e.preventDefault()
            let order = {
                ...customerData,
                productName:singleProduct.name,
                price:totalPrice,
                quantity:productCount
            }
            
            fetch('http://localhost:5000/orders', {
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(order)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    setOrderSuccess(true)
                    
                }
               
            })

    }

    return (
        <>
            <Container>

                <div className="single-product-container">
                    <div className="product-content">
                        <div className="single-product-card text-center p-3">
                            <div className="prodict-image">
                                <img src={image} alt="" />
                            </div>
                            <h4>{name}</h4>
                            <h5>${totalPrice}</h5>
                            <p><small>{description}</small></p>
                            <div className='product-count'>
                                <span className='plus-button' onClick={handleIncrease}><FontAwesomeIcon icon={faPlus} /></span>
                                <span className='total-product-quantity'>{productCount}</span>
                                <span className='minus-button'onClick={handleDecrease} ><FontAwesomeIcon icon={faMinus}/></span>
                            </div>
                        </div>

                        <div className="booking-input-area p-4">
                            <div className="booking-input-field">
                                <form onSubmit={handleOrderSubmit}>
                                    <input type="text" name='name' onBlur={handleOnblur} defaultValue={user.displayName} placeholder='Your Name'/>
                                    <input type="email" name='email' onBlur={handleOnblur} defaultValue={user.email} placeholder='Your Email' />
                                    <input type="text" name='address' onBlur={handleOnblur} placeholder='Your Address'/>
                                    <input type="number" name='phone' onBlur={handleOnblur} placeholder='Your Phone'/>
                                    <input type="submit" value="Place Order" />
                                </form>
                                {orderSuccess&& <Alert variant='success'>Successfully Placed Your Order</Alert>}
                            </div>
                        </div>
                    </div>
                </div>




                
                    
            </Container>   
        </>
    );
};

export default Book;

