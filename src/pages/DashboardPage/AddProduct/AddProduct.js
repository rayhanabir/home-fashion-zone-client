import { Alert } from 'react-bootstrap';
import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
    const [productInfo, setProductInfo] = useState({});
    const [addSuccess, setAddSuccess] = useState(false)
    const handleOnBlur = e =>{
        const name = e.target.name;
        const value = e.target.value;
        const newProduct = {...productInfo}
        newProduct[name] = value;
        setProductInfo(newProduct)
    }

    const handleProductSubmit = e =>{
        e.preventDefault()
        const product = {...productInfo}
        fetch('http://localhost:5000/addproducts', {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setAddSuccess(true)
            }
        })
    }
    return (
        <>
         <section className="dashboard-add-product">
        <h3 className="text-center fw-bold mt-3 text-danger">Add a Product</h3>
        <div className="add-product-input-area">
          <div className="add-product-input-box shadow">
            <form onSubmit={handleProductSubmit}>
              <input
                type="text"
                name="name"
                onBlur={handleOnBlur}
                placeholder="product name"
              />
              <textarea
                cols="30"
                rows="10"
                name="description"
                onBlur={handleOnBlur}
                placeholder="product description"
              ></textarea>
              <input
                type="text"
                name="price"
                onBlur={handleOnBlur}
                placeholder="product price"
              />
              <input
                type="text"
                name="image"
                onBlur={handleOnBlur}
                placeholder="image url"
              />
              
              <input type="submit" value="Submit" />
            </form>
          {addSuccess && <Alert severity="success">Product add successfully</Alert>}
          </div>
        </div>
      </section>  
        </>
    );
};

export default AddProduct;