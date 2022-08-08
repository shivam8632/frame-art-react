import React from 'react';
import Carousel from 'better-react-carousel'
import Container from 'react-bootstrap/Container';

import Fourteen from '../../../../assets/img/cardstock-14.jpg';
import Eighteen from '../../../../assets/img/cardstock-18.jpg';
import TwentyFour from '../../../../assets/img/cardstock-24.jpg';
import CardBoardE from '../../../../assets/img/cardboard-e.jpg';
import CardBoardB from '../../../../assets/img/cardboard-b.jpg';
import '../Specification.scss';

// import './Customers.scss'

const Paper = () => {
    const customerData = [
        {
            image: Fourteen,
            heading: "14 pt. Cardstock",
            text: "Durable cardstock about the same thickness as standard business cards. Suitable for small, light items. 18 pt. Cardstock - Slightly thicker, rigid cardstock. Best used for medium sized items."
        },
        {
            image: Eighteen,
            heading: "18 pt. Cardstock",
            text: "Slightly thicker, rigid cardstock. Best used for medium sized items."
        },
        {
            image: TwentyFour,
            heading: "24 pt. Cardstock",
            text: "Thickest cardstock option for product boxes. It can handle heavy items or multiple products inside."
        },
        {
            image: CardBoardE,
            heading: "Premium White Corrugated Cardboard E-Flute",
            text: "Offers higher durability for heavier items or larger dimensions. Available in standard white, premium white, and brown kraft."
        },
        {
            image: CardBoardB,
            heading: "Premium White Corrugated Cardboard B-Flute",
            text: "Thick and strong corrugated cardboard material. Suitable for heavy items such as canned goods, beverage bottles, and the like."
        }
    ]
    return (
        <div className="customers mt-5" style={{ borderBottom: "1px solid #ccc" }}>
            <Container>
                <div className="heading mb-5">
                        <h2 className='text-center fs-1 fw-bold'>Paper</h2>
                </div>
                <Carousel cols={4} rows={1} gap={10} loop={true}>
                    {customerData.map((customer, i) => (
                        <Carousel.Item key={i}>
                            <img width="100%" src={customer.image} />
                            <h2 className='my-3 text-start'>{customer.heading}</h2>
                            <p className='text-start'>{customer.text}</p>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </div>
    );
}

export default Paper;
