import React from 'react';
import Carousel from 'better-react-carousel';
import Container from 'react-bootstrap/Container';

import Outside from '../../../../assets/img/outside.jpg';
import Inside from '../../../../assets/img/inside.jpg';
import InOut from '../../../../assets/img/out-in.jpg';
import Blank from '../../../../assets/img/blank.jpg';
import '../Specification.scss';

// import './Customers.scss'

const Printed = () => {
    const customerData = [
        {
            image: Outside,
            heading: "Outside only - Full Color",
            text: "Only the outside of the box will be printed on."
        },
        {
            image: Inside,
            heading: "Inside Only - Full Color",
            text: "Only the interior of the box will be printed on."
        },
        {
            image: InOut,
            heading: "Outside & Inside - Full Color",
            text: "Both the interior and exterior of the box will be printed on"
        },
        {
            image: Blank,
            heading: "No Printing (blank)",
            text: "Your custom box will arrive plain with no print."
        }
    ]
  return (
    <div className="customers my-5" style={{ borderBottom: "1px solid #ccc" }}>
        <Container>
            <div className="heading mb-5">
                    <h2 className='text-center fs-1 fw-bold'>Printed Sides</h2>
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

export default Printed;
