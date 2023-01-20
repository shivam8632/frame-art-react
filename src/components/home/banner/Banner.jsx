import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { API } from '../../../config/api';

import './banner.scss';

const HomeBanner = () => {
    const [bannerContent, setBannerContent] = useState(['']);

    useEffect(() => {
        axios.get(API.BASE_URL + 'adminpanel/banner/',{}, {})
        .then((response)=>{
          console.log("Banner Data", response);
          setBannerContent(response.data);
        })

        .catch(function(error) {
            console.log(error.response);
            
        })
    }, [])
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

                {bannerContent.map((bannerData, i) => {
                    return(
                        <div className="content" key={i}>
                            <h1 className='text-start' style={{color: bannerData.title_color}}>{bannerData.title}</h1>
                            <p className='text-start my-3 my-md-4' style={{color: bannerData.description_color}}>{bannerData.description}</p>
                            <div className="buttons d-flex pb-5 pb-lg-0 justify-content-start">
                                <Link to='/product'><button className='mb-4 mb-lg-0' style={{color: bannerData.button_text_color, background: bannerData.button_background}}>{bannerData.button_text}</button></Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            </Container>
        </div>
    )
}

export default HomeBanner;