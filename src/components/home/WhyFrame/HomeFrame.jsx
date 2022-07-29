import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Ordering from '../../../assets/img/ordering.jpg';
import Design from '../../../assets/img/design.png';
import Customization from '../../../assets/img/customization.png';

import './HomeFrame.scss'

const frameData = [
    {
        image: Ordering,
        title: 'Super Fast Ordering',
        text: 'Our website calculates prices in real-time and lets you customize, design, and pay for your packaging in minutes.No more waiting for sales reps!'
    },
    {
        image: Design,
        title: 'Free 3D Design Studio',
        text: 'Our online 3D Design Studio is so hassle-free and mesmerizing, even pros can’t resist! Add text, logo, and colors, and make a package yours in minutes!'
    },
    {
        image: Customization,
        title: 'Ultimate Customization',
        text: 'We’re here to solve any of your printing puzzles. Fine-tune your package to any size, material, and quantity you need without having to pay extra.'
    }
]

const HomeFrame = () => {
    return(
        <div className="frame">
            <Container>
                <Row>
                <div className="heading mb-4">
                    <h2 className='text-center fs-1 fw-bold'>Why Free Art</h2>
                </div>
                {frameData.map((frame, i) => (
                    <Col xs={12} md={4} key={i}>
                        <Card>
                            <Card.Img variant="top" src={frame.image} />
                            <Card.Body>
                                <Card.Title>{frame.title}</Card.Title>
                                <Card.Text>{frame.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                </Row>
            </Container>
        </div>
    )
}

export default HomeFrame;
