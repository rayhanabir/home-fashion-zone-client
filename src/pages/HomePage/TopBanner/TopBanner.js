import React from 'react';
import './TopBanner.css';
import topbanner from '../../../images/top-banner.jpg'
import { Col, Container, Row } from 'react-bootstrap';

const TopBanner = () => {
    return (
        <>
            <section className='top-banner'>
                <Container>
                    <Row className='d-flex align-items-center'>
                        <Col md={6} sm={12}>
                            <div className="top-banner-com">
                                <h2>BETTER LIVING COLLECTION <br />
                                FOR EVERY HOUSE</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quidem doloribus repudiandae consequuntur reiciendis, similique ex eaque voluptatem eligendi voluptatibus.</p>
                                <button className='banner-btn'>Know More</button>
                            </div>
                        </Col>
                        <Col md={6} sm={12}>
                        <img style={{width:"100%"}} src={topbanner} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
            
        </>
    );
};

export default TopBanner;