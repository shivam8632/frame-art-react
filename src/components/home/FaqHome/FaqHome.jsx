import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

import { API } from '../../../config/api';
import axios from 'axios';

import './FaqHome.scss';

const FaqHome = () => {
    const [faqData, setFaqData] = useState(['']);
    const [faqColor, setFaqColor] = useState(['']);

    useEffect(() => {
        axios.get(API.BASE_URL + 'adminpanel/FAQ/',{}, {})
        .then((response)=>{
          setFaqData(response.data);
        })

        .catch(function(error) {
            console.log(error.response);
            
        })
    }, [])

    useEffect(() => {
        axios.get(API.BASE_URL + 'adminpanel/FAQ-color-list/',{}, {})
        .then((response)=>{
          setFaqColor(response.data)
        })

        .catch(function(error) {
            console.log(error.response);
            
        })
    }, [])

  return (
    <div className="faq">
        <Container>
            <div className="heading mb-4">
                <h2 className='text-center fs-1 fw-bold'>Frequently Asked Questions</h2>
            </div>
            <Accordion defaultActiveKey="0">
                {faqData.map((faqData) => {
                    return(
                        <Accordion.Item eventKey={faqData.id} key={faqData.id}>
                            {faqColor.map((faqItem, i) => {
                                return(
                                    <>
                                        <Accordion.Header style={{background: faqItem.title_background, color: faqItem.title}}>{faqData.title}</Accordion.Header>
                                        <Accordion.Body style={{background: faqItem.description_background, color: faqItem.description}}>{faqData.description}</Accordion.Body>
                                    </>
                                )
                            })}
                        </Accordion.Item>
                    )
                })}
            </Accordion>
    </Container>
    </div>
  );
}

export default FaqHome;
