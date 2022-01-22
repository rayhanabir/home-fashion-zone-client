import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-solid-svg-icons'
import './Footer.css';

const Footer = () => {
    return (
        <>
         <footer className='footer-area'>
            <div className="footer-content">
                <div className="footer-content-box">
                    <div className="box-0 box">
                        <span className='text-white'><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                        <address>House-1952, Road-09, Baridhara DOHS, Dhaka , Bangladesh</address>
                    </div>
                    <div className="box-1 box">
                        <h4>Company</h4>
                        <ul>
                            <li>About</li>
                            <li>Project</li>
                            <li>Our Team</li>
                            <li>terms & conditions</li>
                            <li>submit listing</li>
                        </ul>
                    </div>
                    <div className="box-2 box">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>Quick Links</li>
                            <li>Rentals</li>
                            <li>Sales</li>
                            <li>Contact</li>
                            <li>blog</li>
                        </ul>
                    </div>
                    <div className="box-3 box">
                        <h4>About Us</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, labore. Illo nemo quo quaerat fugit voluptates obcaecati est mollitia doloribus!</p>
                        <div className="social-links">
                            <span><FontAwesomeIcon icon={faFacebook} /></span>
                            <span><FontAwesomeIcon icon={faInstagram} /></span>
                            <span><FontAwesomeIcon icon={faLinkedin} /></span>
                            <span><FontAwesomeIcon icon={faTwitter} /></span>
                        </div>
                    </div>
                </div>
            </div>
         </footer>   
        </>
    );
};

export default Footer;