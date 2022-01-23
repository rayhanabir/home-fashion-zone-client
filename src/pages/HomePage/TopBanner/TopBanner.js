import React from 'react';
import './TopBanner.css';
import topCamera from '../../../images/top-camera.jpg';
import { Col, Container, Row } from 'react-bootstrap';

const TopBanner = () => {
    return (
        <>
            <section className='top-banner'>
                <Container>
                    <Row className='d-flex align-items-center'>
                        <Col md={6} sm={12}>
                            <div className="top-banner-com">
                                <h2>BETTER STYLISH COLLECTION <br />
                                FOR EVERY PERSON</h2>
                                <p>Hey ! we are selling all kind of camera. you can buy your best gadget item of us.we ensure quality products in mid price range. </p>
                                <button className='banner-btn'>Know More</button>
                            </div>
                        </Col>
                        <Col md={6} sm={12}>
                        <img style={{width:"100%"}} src={topCamera} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
            
        </>
    );
};

export default TopBanner;