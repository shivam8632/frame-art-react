import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'better-react-carousel'

import Glossy from '../../../../assets/img/glossy.jpg';
import Matte from '../../../../assets/img/matte.jpg';
import UV from '../../../../assets/img/uv.jpg';
import '../Specification.scss';


const Coating = () => {
    const customerData = [
        {
            image: Glossy,
            heading: "Glossy Aqueous Coating",
            text: "Shiny finish that elevates the colors of your custom box. Best used for image-heavy designs"
        },
        {
            image: Matte,
            heading: "Matte Aqueous Coating",
            text: "Offers a muted, elegant finish. The smooth surface is writable with a ballpoint pen and a permanent ink marker."
        },
        {
            image: UV,
            heading: "High-Gloss UV Coating",
            text: "Gives your boxes an extra shiny finish. The UV coating adds an extra layer of protection from scratches and scuffs."
        },
    ]
  return (
    <div className="customers my-5" style={{ borderBottom: "1px solid #ccc" }}>
        <Container>
            <div className="heading mb-5">
                <h2 className='text-center fs-1 fw-bold'>Coating</h2>
            </div>
            <Carousel cols={4} rows={1} gap={10} loop={false}>
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

export default Coating;
