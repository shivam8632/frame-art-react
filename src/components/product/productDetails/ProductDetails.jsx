import React from 'react';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-scroll'
import Specification from '../specifications/Specifications';
import Overview from './overview/Overview';
import FaqHome from '../../home/FaqHome/FaqHome';
import CustomerHome from '../../home/testimonials/TestimonialHome';
import './ProductDetails.scss';



const ProductDetails = () => {
    return(
        <div className="product-details">
            <div className="details-bar" style={{ position: 'sticky', top: 0, zIndex: 4 }}>
                <ul className="details-list px-3 d-flex flex-wrap" style={{ background: '#FFF', justifyContent: 'center', borderBottom: '1px solid #e1e1e1' }}>
                    <Link to="specifications" spy={true} style={{ width: 'fit-content', color: '#000', textDecoration: 'none', padding: '1.5rem 0' }}>Specification</Link>
                    <Link to="overview" spy={true} style={{ width: 'fit-content', color: '#000', textDecoration: 'none', padding: '1.5rem 0' }}>Overview</Link>
                    <Link to="faq" spy={true} style={{ width: 'fit-content', color: '#000', textDecoration: 'none', padding: '1.5rem 0' }}>FAQ</Link>
                    <Link to="customer" spy={true} style={{ width: 'fit-content', color: '#000', textDecoration: 'none', padding: '1.5rem 0' }}>Reviews</Link>
                </ul>
            </div>
            <Container>
                <div className="details-container">
                    <Specification />
                    <Overview />
                    <FaqHome />
                    <CustomerHome />
                </div>
            </Container>
        </div>
    )
}

export default ProductDetails