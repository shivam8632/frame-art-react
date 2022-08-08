import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Breadcrumbs from '../../breadcrumbs/Breadcrumbs';
import BlogImage from '../../../assets/img/blog-list.jpeg';

import './BlogList.scss';

const BlogList = () => {
    const blogList = [
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
        <div className="blog-list-container">
            <Container>
                <div className="breadcrumbs d-flex mb-4">
                    <Breadcrumbs />
                    <span className='ms-2'>/</span>
                    <span className='ms-2'>Blog & Articles</span>
                </div>
                <div className="blog-list">
                    <div className="heading mb-5">
                        <h2>Customer Stories</h2>
                    </div>
                    <div className="list-main d-flex flex-wrap">  
                        {blogList.map((list, i) => (
                            <Link to="/blog" className="list-box d-flex flex-column mb-5" key={i}>
                                <img src={list.image} alt="blog-img" />
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

export default BlogList;
