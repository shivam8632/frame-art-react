import React from 'react';
import Container from 'react-bootstrap/Container';

import BannerImage from '../../../assets/img/banner-img.png';

import './banner.scss';

const HomeBanner = () => {
    return (
        <div className="home-banner py-3 py-md-4 align-items-lg-center">
<<<<<<< HEAD
            <div className="area" >
                <ul className="circles">
=======
            <div class="area" >
                <ul class="circles">
>>>>>>> 7065b2c93f53f5d91ade4383afa827e5018db14d
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
                    <h1 className='text-start text-light'>Custom Boxes & Personalized Packaging Your Brand Deserves</h1>
                    <p className='text-start text-light my-3 my-md-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ullam alias commodi tenetur laudantium, maxime aspernatur placeat doloremque odio.</p>
                    <div className="buttons d-flex pb-5 pb-lg-0 justify-content-start">
                        <button className='mb-4 mb-lg-0'>Get Started</button>
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