import React from 'react';
import Carousel from 'better-react-carousel'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import Cosmetics from '../../../../assets/img/cosmetics.jpg';
import Wine from '../../../../assets/img/wine.jpg';
import Soap from '../../../../assets/img/soap.jpg';
import Coffee from '../../../../assets/img/coffee.jpg';
import '../Specification.scss';

// import './Customers.scss'

const Related = () => {
    const customerData = [
        {
            image: Cosmetics,
            heading: "Cosmetic Boxes",
            text: "Create stunning custom cosmetic packaging for your business. Our full-color product boxes can be customized to the exact specifications and dimensions of your beauty products."
        },
        {
            image: Wine,
            heading: "Wine Boxes",
            text: "Create custom wine boxes that exude elegance and style. Offered in custom sizes, our wine boxes are made from durable cardstock and corrugated cardboard."
        },
        {
            image: Soap,
            heading: "Soap Boxes",
            text: "Engage your customers with well-designed soap boxes. You can personalize your soap boxes according to custom dimensions and your preferred designs."
        },
        {
            image: Coffee,
            heading: "Coffee Boxes",
            text: "Make your product stand out on the shelves with custom coffee boxes. Personalize your coffee packaging by choosing the dimensions, material, and printed sides."
        },
    ]
    return (
        <div className="customers mt-5" style={{ borderBottom: "1px solid #ccc" }}>
            <Container>
                <div className="heading mb-5">
                        <h2 className='text-center fs-1 fw-bold'>Related Products</h2>
                </div>
                <Carousel cols={4} rows={1} gap={10} loop={true}>
                    {customerData.map((customer, i) => (
                        <Carousel.Item key={i}>
                            <img width="100%" src={customer.image} />
                            <Link to="/home" className='my-3 text-start'>{customer.heading}</Link>
                            <p className='text-start'>{customer.text}</p>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </div>
    );
}

export default Related;
