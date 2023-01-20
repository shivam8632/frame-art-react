import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { API } from '../../config/api';
import parse from 'html-react-parser';

import './Terms.scss';

const Terms = () => {
    const [termsContent, setTermsContent] = useState();

    useEffect(() => {
        axios.get(API.BASE_URL + 'adminpanel/terms-of-use/', {})
        .then(function(response) {
          console.log("Terms of Use", response.data);
          setTermsContent(response.data)
          
      })
      .catch(function(error) {
        console.log(error);
          
      })
    }, [])

    console.log("termsContent", termsContent)
    return(
        <div className="terms">
            <Container>
                <div className="terms-container">
                    {termsContent?.map((contentP) => {
                        return(
                            <>
                                <div className="heading mb-0">
                                    <h2>{contentP.title}</h2>
                                </div>
                                {parse(contentP.content)}
                            </>
                            
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}

export default Terms;