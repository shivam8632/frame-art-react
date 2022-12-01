import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

import StoryBoard from '../../assets/img/story.mp4';
import './Assembly.scss';
import axios from 'axios';
import { API } from '../../config/api';

const Assembly = () => {

    const [getAssembly, setAssembly] = useState([''])

    useEffect(() => {
        axios.get(API.BASE_URL + 'adminpanel/assemblyvideolist/', {})
        .then(function(response) {
            setAssembly(response.data)
            
        })
        .catch(function(error) {
          console.log(error);
            
        })
    }, [])
    return(
        <div className="assembly">
            <Container>
                <h1 className='mb-5'>Assembly</h1>
                <div className="assembly-container">
                    <div className="assembly-video d-md-flex justify-content-between">
                        <div className="video">
                            {getAssembly?.map((dataa) => {
                                return (
                                    <video src={'http://13.210.246.45:8000' + dataa.video} controls={true} key={dataa.id} autoPlay muted type="video/mp4" />
                                )
                            })}
                        </div>
                        <ul className="assembly-text">
                            <li>Materials</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Assembly;
