import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Breadcrumbs from '../../breadcrumbs/Breadcrumbs';
import BlogImage from '../../../assets/img/blog-list.jpeg';

import './BoxingList.scss';

const BoxingList = () => {
    const boxingList = [
        {
            image: BlogImage,
            heading: "Tiny Easel: Curated Art Kits for Your Little Artists",
            text: "Scene-stealing Tiny Easel custom boxes have more to offer than beautiful & colorful packaging design. This art kit offers hours of creative fun for young artists while allowing parents to encourage their kids to explore art without having to worry about the mess."
        },
        {
            image: BlogImage,
            heading: "Tiny Easel: Curated Art Kits for Your Little Artists",
            text: "Scene-stealing Tiny Easel custom boxes have more to offer than beautiful & colorful packaging design. This art kit offers hours of creative fun for young artists while allowing parents to encourage their kids to explore art without having to worry about the mess."
        },
        {
            image: BlogImage,
            heading: "Tiny Easel: Curated Art Kits for Your Little Artists",
            text: "Scene-stealing Tiny Easel custom boxes have more to offer than beautiful & colorful packaging design. This art kit offers hours of creative fun for young artists while allowing parents to encourage their kids to explore art without having to worry about the mess."
        },
        {
            image: BlogImage,
            heading: "Tiny Easel: Curated Art Kits for Your Little Artists",
            text: "Scene-stealing Tiny Easel custom boxes have more to offer than beautiful & colorful packaging design. This art kit offers hours of creative fun for young artists while allowing parents to encourage their kids to explore art without having to worry about the mess."
        },
        {
            image: BlogImage,
            heading: "Tiny Easel: Curated Art Kits for Your Little Artists",
            text: "Scene-stealing Tiny Easel custom boxes have more to offer than beautiful & colorful packaging design. This art kit offers hours of creative fun for young artists while allowing parents to encourage their kids to explore art without having to worry about the mess."
        },
        {
            image: BlogImage,
            heading: "Tiny Easel: Curated Art Kits for Your Little Artists",
            text: "Scene-stealing Tiny Easel custom boxes have more to offer than beautiful & colorful packaging design. This art kit offers hours of creative fun for young artists while allowing parents to encourage their kids to explore art without having to worry about the mess."
        },
        {
            image: BlogImage,
            heading: "Tiny Easel: Curated Art Kits for Your Little Artists",
            text: "Scene-stealing Tiny Easel custom boxes have more to offer than beautiful & colorful packaging design. This art kit offers hours of creative fun for young artists while allowing parents to encourage their kids to explore art without having to worry about the mess."
        },
        {
            image: BlogImage,
            heading: "Tiny Easel: Curated Art Kits for Your Little Artists",
            text: "Scene-stealing Tiny Easel custom boxes have more to offer than beautiful & colorful packaging design. This art kit offers hours of creative fun for young artists while allowing parents to encourage their kids to explore art without having to worry about the mess."
        },
        {
            image: BlogImage,
            heading: "Tiny Easel: Curated Art Kits for Your Little Artists",
            text: "Scene-stealing Tiny Easel custom boxes have more to offer than beautiful & colorful packaging design. This art kit offers hours of creative fun for young artists while allowing parents to encourage their kids to explore art without having to worry about the mess."
        },
    ]
    return(
        <div className="boxing-list-container">
            <Container>
                <div className="breadcrumbs d-flex mb-4">
                    <Breadcrumbs />
                    <span className='ms-2'>/</span>
                    <span className='ms-2'>Boxing and Packaging Articles</span>
                </div>
                <div className="boxing-list">
                    <div className="heading mb-5">
                        <h2>Boxing and Packaging Articles</h2>
                    </div>
                    <div className="list-main d-flex flex-wrap">  
                        {boxingList.map((list, i) => (
                            <Link to="/blogs/boxing-and-packaging-articles/boxing-content" className="list-box d-flex flex-column mb-5" key={i}>
                                <img src={list.image} alt="boxing-img" />
                                <div className="list-content">
                                    <h3 className='mb-3 text-dark'>{list.heading}</h3>
                                    <p className='mb-0'>{list.text}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default BoxingList;
