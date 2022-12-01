import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

import { API } from '../../../config/api';
import axios from 'axios';

import './FaqHome.scss';

const FaqHome = () => {
    const [faqData, setFaqData] = useState(['']);

    useEffect(() => {
        axios.get(API.BASE_URL + 'adminpanel/FAQ/',{}, {})
        .then((response)=>{
          console.log("FAQ Data", response);
          setFaqData(response.data);
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
                            <Accordion.Header>{faqData.title}</Accordion.Header>
                            <Accordion.Body>{faqData.description}</Accordion.Body>
                        </Accordion.Item>
                    )
                })}
            </Accordion>
    </Container>
    </div>
  );
}

export default FaqHome;
