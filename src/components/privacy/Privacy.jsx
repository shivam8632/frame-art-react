import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { API } from '../../config/api';
import parse from 'html-react-parser';

import './Privacy.scss';

const Privacy = () => {
    const [privacyContent, setPrivacyContent] = useState();
    useEffect(() => {
        axios.get(API.BASE_URL + 'adminpanel/privacy-policy-list/', {})
        .then(function(response) {
          console.log("Privacy Content", response.data);
          setPrivacyContent(response.data)
          
      })
      .catch(function(error) {
        console.log(error);
          
      })
    }, [])

    return(
        <div className="privacy">
            <Container>
                <div className="privacy-container">
                    {privacyContent?.map((contentP) => {
                        return(
                            parse(contentP.content)
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}

export default Privacy;