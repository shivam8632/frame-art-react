import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MailerBox from '../../../assets/img/mailer-box.jpg';
import ShippingBox from '../../../assets/img/shipping-box.jpg';
import { Link } from 'react-router-dom';

import './HomeCollection.scss'


const HomeCollection = () => {
    const collectionData = [
        {
            image: MailerBox,
            title: 'Product Box',
            text: 'Print and design your own custom product boxes online and help your brand stand out from the competition. Use our easy-to-use 3D design tool, visit our website to get started!'
        },
        {
            image: ShippingBox,
            title: 'Tissue Paper',
            text: 'Print and design your own custom product boxes online and help your brand stand out from the competition'
        },
        {
            image: MailerBox,
            title: 'Product Box',
            text: 'Print and design your own custom product boxes online and help your brand stand out from the competition. Use our easy-to-use 3D design tool, visit our website to get started!'
        },
        {
            image: ShippingBox,
            title: 'Tissue Paper',
            text: 'Print and design your own custom product boxes online and help your brand stand out from the competition'
        },
        {
            image: MailerBox,
            title: 'Product Box',
            text: 'Print and design your own custom product boxes online and help your brand stand out from the competition. Use our easy-to-use 3D design tool, visit our website to get started!'
        },
        {
            image: ShippingBox,
            title: 'Tissue Paper',
            text: 'Print and design your own custom product boxes online and help your brand stand out from the competition'
        }
    ]

  return (
    <div className="home-collection d-flex flex-wrap py-xl-0">
       <Container>
        <Row>
            <div className="heading mb-4">
                <h2 className='text-center fs-1 fw-bold'>Collections</h2>
            </div>
        {collectionData.map((collection, i) => (
         <Col xs={12} md={4} key={i}>
            <Card>
                <Card.Img variant="top" src={collection.image} />
                <Card.Body>
                    <Card.Title>{collection.title}</Card.Title>
                    <Card.Text>{collection.text}</Card.Text>
                    <div className="buttons d-flex pb-5 pb-lg-0 justify-content-center">
                    <Link to="/product" className='bttn'>Customize</Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
       ))}
        </Row>
       </Container>
    </div>
  );
}

export default HomeCollection;