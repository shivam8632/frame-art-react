import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


import { API } from '../../../config/api';
import axios from 'axios';

import './HomeFrame.scss'


const HomeFrame = () => {

    const [serviceData, setServiceData] = useState(['']);

    useEffect(() => {
        axios.get(API.BASE_URL + 'adminpanel/services/',{}, {})
        .then((response)=>{
          console.log("Services Data", response);
          setServiceData(response.data);
        })

        .catch(function(error) {
            console.log(error.response);
            
        })
    }, [])

    return(
        <div className="frame">
            <Container>
                <Row>
                <div className="heading mb-4">
                    <h2 className='text-center fs-1 fw-bold'>Why Free Art</h2>
                </div>
                {serviceData.map((frame, i) => (
                    <Col xs={12} md={4} key={i}>
                        <Card>
                            <Card.Img variant="top" src={frame.image} />
                            <Card.Body>
                                <Card.Title>{frame.title}</Card.Title>
                                <Card.Text>{frame.description}</Card.Text>
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
