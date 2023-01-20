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
    const [serviceColor, setServiceColor] = useState(['']);

    useEffect(() => {
        axios.get(API.BASE_URL + 'adminpanel/services/',{}, {})
        .then((response)=>{
          setServiceData(response.data);
        })

        .catch(function(error) {
            console.log(error.response);
            
        })
    }, [])

    useEffect(() => {
        axios.get(API.BASE_URL + 'adminpanel/services-color-list/',{}, {})
        .then((response)=>{
          setServiceColor(response.data)
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
                            {serviceColor?.map((colorItem, i) => {
                                return(
                                    <Card.Body style={{background: colorItem.background}} key={i}>
                                        <Card.Title style={{color: colorItem.title}}>{frame.title}</Card.Title>
                                        <Card.Text style={{color: colorItem.description}}>{frame.description}</Card.Text>
                                    </Card.Body>
                                )
                            })}
                        </Card>
                    </Col>
                ))}
                </Row>
            </Container>
        </div>
    )
}

export default HomeFrame;
