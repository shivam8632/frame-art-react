import React from 'react';
import Container from 'react-bootstrap/Container';

import StoryBoard from '../../assets/img/story.mp4';
import './Assembly.scss';

const Assembly = () => {
    return(
        <div className="assembly">
            <Container>
                <h1 className='mb-5'>Assembly</h1>
                <div className="assembly-container">
                    <div className="assembly-video d-md-flex justify-content-between">
                        <div className="video">
                            <video src={StoryBoard} controls={true} autoPlay muted type="video/mp4" />
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
