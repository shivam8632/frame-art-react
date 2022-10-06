import React from 'react';
import Carousel from 'better-react-carousel'
import Container from 'react-bootstrap/Container';

import Shisheido from '../../../assets/img/shisheido.svg';
import Tide from '../../../assets/img/tide.svg';
import RagBone from '../../../assets/img/rag&bone.svg';
import Nordstrom from '../../../assets/img/nordstrom.svg';
import Nestle from '../../../assets/img/nestle.svg';

import './Customers.scss'

const CustomersHome = () => {
    const customerData = [
        {
            image: Shisheido,
        },
        {
            image: Tide,
        },
        {
            image: RagBone,
        },
        {
            image: Nordstrom,
        },
        {
            image: Nestle,
        },
        {
            image: Shisheido,
        },
        {
            image: Tide,
        },
        {
            image: RagBone,
        },
        {
            image: Nordstrom,
        },
        {
            image: Nestle,
        }
    ]
  return (
    <div className="customers">
        <Container>
            {/* <div className="heading mb-4">
                    <h2 className='text-center fs-1 fw-bold'>Our Customers</h2>
            </div> */}
            <Carousel cols={4} rows={1} gap={10} loop={true}>
                {customerData.map((customer, i) => (
                    <Carousel.Item key={i}>
                        <img width="100%" src={customer.image} />
                </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    </div>
  );
}

export default CustomersHome;
