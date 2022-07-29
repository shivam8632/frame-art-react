import React from 'react';
import DimensionImage from '../../../../assets/img/dimension-img.jpg';
import Container from 'react-bootstrap/Container';
import Carousel from 'better-react-carousel';
import '../Specification.scss';

const Dimension = () => {

    const customerData = [
        {
            image: DimensionImage,
        },
    ]
    return(
        <div className="customers my-5" style={{ borderBottom: "1px solid #ccc" }}>
        <Container>
            <div className="heading mb-5">
                    <h2 className='text-center fs-1 fw-bold'>Dimensions</h2>
            </div>
            <Carousel cols={4} rows={1} gap={10} loop={false}>
                {customerData.map((customer, i) => (
                    <Carousel.Item key={i}>
                        <img width="100%" src={customer.image} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    </div>
    )
}

export default Dimension;