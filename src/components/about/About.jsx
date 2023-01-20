import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { API } from '../../config/api';
import parse from 'html-react-parser';

import './About.scss';

const About = () => {
    const [aboutContent, setAboutContent] = useState();

    useEffect(() => {
        axios.get(API.BASE_URL + 'adminpanel/about-us/', {})
        .then(function(response) {
          console.log("Terms of Use", response.data);
          setAboutContent(response.data)
          
      })
      .catch(function(error) {
        console.log(error);
          
      })
    }, [])
    return(
        <div className="about">
            <Container>
                <div className="about-container">
                    {aboutContent?.map((contentP) => {
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

export default About;