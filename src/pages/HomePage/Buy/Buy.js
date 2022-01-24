import React from 'react';
import './Buy.css';

const Buy = () => {
    return (
        <div>
            <section className='buy-section'>
                <div className="buy-container">
                    <div className="buy-content">
                        <h2 className='text-center'>Why Buy From Us</h2>
                        <div className="buy-content-box ">
                            <div className="box">
                                <h4>Free Shipping</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro rerum repellendus molestiae est. Saepe ut harum, cupiditate sint mollitia </p>
                                <button className="know-more">Know More</button>
                            </div>
                            <div className="box">
                                <h4>24/7 Support</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro rerum repellendus molestiae est. Saepe ut harum, cupiditate sint mollitia </p>
                                <button className="know-more">Know More</button>
                            </div>
                            <div className="box">
                                <h4>Best Return Policy</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro rerum repellendus molestiae est. Saepe ut harum, cupiditate sint mollitia</p>
                                <button className="know-more">Know More</button>
                            </div>
                            <div className="box">
                                <h4>Guaranted Quality</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro rerum repellendus molestiae est. Saepe ut harum, cupiditate sint mollitia</p>
                                <button className="know-more">Know More</button>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Buy;