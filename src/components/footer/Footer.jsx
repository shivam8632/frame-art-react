import React from 'react';
import Container from 'react-bootstrap/Container';
import Logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import {
    faFacebook,
    faInstagram,
    faCcVisa,
    faCcMastercard,
    faCcDiscover,
    faCcAmazonPay,
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss';
const Footer = () => {
    return(
        <footer>
            <Container>
                <div className="footer-container d-flex flex-wrap justify-content-between">
                    <div className="website-info footer-content mb-5 mb-lg-0">
                        <div className="logo">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className="info mt-3">
                            <div className="info-box d-flex mb-2">
                                <p className='mb-0 text-white me-2'>Mail:- </p>
                                <a href="mailto:info@frameart.com" className='text-decoration-underline text-white'>info@frameart.com</a>
                            </div>
                            <div className="info-box d-flex mb-2">
                                <p className='mb-0 text-white me-2'>Phone:- </p>
                                <a href="tel:+185776979"  className='text-decoration-underline text-white'>1-855-76979</a>
                            </div>
                            <div className="info-box d-flex mb-2">
                                <p className='mb-0 text-white me-1 fw-bold'>Mon</p>
                                <p className='mb-0 text-white me-1'>-</p>
                                <p className='mb-0 text-white me-1 fw-bold'>Fri</p>
                                <p className='mb-0 text-white me-1'>from</p>
                                <p className='mb-0 text-white me-1 fw-bold'>6am</p>
                                <p className='mb-0 text-white me-1'>to</p>
                                <p className='mb-0 text-white me-1 fw-bold'>7pm</p>
                                <p className='mb-0 text-white'>PT</p>
                            </div>
                            <div className="info-box d-flex mb-3">
                                <p className='mb-0 text-white'>8000 Haskell Ave, Van Nuys, CA 91406</p>
                            </div>
                            <div className="info-box d-flex">
                                <a href="#" className='me-3'>
                                    <FontAwesomeIcon icon={faFacebook} style={{ color: "#FFF", width: "28px", height: "28px" }} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faInstagram} style={{ color: "#FFF", width: "28px", height: "28px" }} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="information footer-content mb-5 mb-lg-0">
                        <h2 className='text-white mb-3'>Information</h2>
                        <ul className="information-links p-0">
                        <li className='d-flex'>

                            <Link to="/about" className="menu-link text-white text-decoration-none">About Us</Link>
                        </li>
                        <li className='d-flex'>
                            <Link to="/accessibility" className="menu-link text-white text-decoration-none">Accessibility</Link>
                        </li>
                        <li className='d-flex'>
                            <Link to="/blog/customer-stories" className="menu-link text-white text-decoration-none">Customer Stories</Link>
                        </li>
                        <li className='d-flex'>
                            <Link to="/blogs/boxing-and-packaging-articles" className="menu-link text-white text-decoration-none">Boxing and Packaging Articles</Link>
                        </li>
                        <li className='d-flex'>
                            <Link to="/customer-reviews" className="menu-link text-white text-decoration-none">Reviews</Link>
                        </li>
                        <li className='d-flex'>
                            <Link to="/privacy" className="menu-link text-white text-decoration-none">Privacy Policy</Link>
                        </li>
                        <li className='d-flex'>
                            <Link to="/terms-of-use" className="menu-link text-white text-decoration-none">Terms of Use</Link>
                        </li>
                        </ul>
                    </div>
                    <div className="payments footer-content mb-5 mb-lg-0">
                        <h2 className='text-white mb-3'>Safe Payments</h2>
                        <p className='text-white'>Our website is compatible with many popular payment methods. SSL 100% Secure Transactions.</p>
                        <ul className="payments-list d-flex justify-content-center align-items-center justify-content-md-start p-0">
                            <li className='d-flex'>
                                <FontAwesomeIcon icon={faCcVisa} style={{ color: "#FFF", width: "40px", height: "40px" }} />
                            </li>
                            <li className='d-flex'>
                                <FontAwesomeIcon icon={faCcAmazonPay} style={{ color: "#FFF", width: "40px", height: "40px" }} />
                            </li>
                            <li className='d-flex'>
                                <FontAwesomeIcon icon={faCcDiscover} style={{ color: "#FFF", width: "40px", height: "40px" }} />
                            </li>
                            <li className='d-flex'>
                                <FontAwesomeIcon icon={faCcMastercard} style={{ color: "#FFF", width: "40px", height: "40px" }} />
                            </li>
                        </ul>
                    </div>
                    <div className="newsletter footer-content">
                        <h2 className='text-white mb-3'>Subscribe to our Newsletter!</h2>
                        <p className='text-white'>Be among the first to learn about new products, promotions, and featured customer stories.</p>
                        <Form className='d-flex align-items-center mt-1'>
                            <Form.Group controlId="formEmail" className='email'>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <div className="buttons">
                                <button>Submit</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Container>
            <div className="copyright">
                <Container>

                <span className="copyright-text text-center text-white d-flex justify-content-center">

                © 2022 Frame-art.com. All rights reserved.
                </span>
                </Container>
            </div>
        </footer>
    )
}

export default Footer;