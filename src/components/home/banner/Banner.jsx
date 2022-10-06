import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import BannerImage from '../../../assets/img/banner-img.png';

import './banner.scss';

const HomeBanner = () => {
    return (
        <div className="home-banner py-3 py-md-4 align-items-lg-center">

            <div className="area" >
                <ul className="circles">

                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
            </div >
            <Container>
            <div className="banner-content pb-5 d-md-flex justify-content-between align-items-center">
                <div className="content">
                    <h1 className='text-start text-light'>Frame Art is a picture frame that turns your picture, poster or painting into a work of art</h1>
                    <p className='text-start text-light my-3 my-md-4'>Our frames are customizable to your personal taste with many colour options and looks. We offer individual components for your custom frame to make it reusable and easily modifiable.</p>
                    <div className="buttons d-flex pb-5 pb-lg-0 justify-content-start">
                        <Link to='/product'><button className='mb-4 mb-lg-0'>Get Started</button></Link>
                    </div>
                </div>
                <div className="banner-image d-none d-md-flex">
                    <img src={BannerImage} alt="banner-img" />
                </div>
            </div>
            </Container>
        </div>
    )
}

export default HomeBanner;