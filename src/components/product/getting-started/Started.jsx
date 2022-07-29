import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import './Started.scss';

const Started = () => {
    return(
        <div className="started">
            <Container>
                <div className="heading">
                    <h2>Getting Started With Product Boxes</h2>
                    <p className='text-start'>Using custom product boxes to display your products can be one of the best decisions you’ll ever make for business. It will increase brand awareness and name recognition, which in turn, can boost sales. To get started, read some of our guides on how you can set sail on your journey:</p>
                </div>
                <ul className="started-list pt-3">
                    <li>
                        <Link to="/home" >How Packaging Boxes Help in Advertising</Link>
                        - A short, helpful guide on how the right packaging is key to compete in today’s business landscape.
                    </li>
                    <li>
                        <Link to="/home" >User Guide to 3D Design Tool</Link>
                        – Our online design tool will make your first foray into box design a smooth ride. Read this guide to get started.
                    </li>
                    <li>
                        <Link to="/home" >Retail Packaging Guide</Link>
                        – What are the key points to consider in improving your retail packaging game? Read this article to find out why custom product boxes are crucial to your brand’s success.
                    </li>
                    <li>
                        <Link to="/home" >Packaging 101: Basic Box Packaging Definitions and Terminologies</Link>
                        – No need to get lost in translation. This handy guide will assist you in learning all about box packaging jargon and terminologies.<br />
                        Personalized product boxes play an integral role in elevating your brand. We've outlined below some of the most popular ways people use product boxes. These are just the tip of the iceberg, however. With product boxes, the possibilities are endless!
                    </li>
                    <li>
                        <Link to="/home" >Custom Makeup Boxes</Link>
                    </li>
                    <li>
                        Lipstick Boxes or <Link to="/home" > Lip Gloss Boxes</Link>
                    </li>
                    <li>
                        <Link to="/home" >Custom Wine Boxes</Link>
                    </li>
                    <li>
                        <Link to="/home" >Soap Boxes</Link>
                    </li>
                    <li>
                        <Link to="/home" >Tea Boxes</Link>
                    </li>
                    <li>
                        <Link to="/home" >Coffee Boxes</Link>
                    </li>
                    <li>
                        <Link to="/home" >Cosmetic Boxes</Link>
                    </li>
                </ul>
            </Container>
        </div>
    )
}

export default Started;