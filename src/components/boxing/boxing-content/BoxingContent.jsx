import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import BlogImage from '../../../assets/img/blog-list.jpeg';
import Beam from '../../../assets/img/beam.jpeg';
import Natural from '../../../assets/img/natural.jpg';

import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './BoxingContent.scss';

const BoxingContent = () => {
    return(
        <div className="boxing-content-container">
            <Container>
                <img src={BlogImage} alt="boxing-img" className='w-100' />
                <div className="boxing-main">
                    <div className="main-content">
                        <h2>What’s All the Buzz About Right-Size Packaging?</h2>
                        <p>It’s picking up steam, isn’t it?</p>
                        <p>And rightfully so. Right-size packaging fulfills functional and protective needs to ensure your products reach your customers in the best shape.</p>
                        <p>We’re no strangers to the impact of custom packaging in building a positive brand perception. Packaging design plays a vital role in supporting that. However, we sometimes think of design only within the confines of aesthetics when it does not and should not stop at visual value.</p>
                        <p>Aesthetics, function, consumer convenience, and product integrity—all these should come together, like puzzle pieces falling into place.</p>
                    </div>
                    <div className="boxing-content">
                        <img src={Beam} alt="beam" className="w-100" />
                        <center>
                            <span className="subtext">
                            <Link to="/">Beam Dental</Link> is a digital-first dental insurance provider for small to mid-size businesses across the country focused on ease of use and preventive care.
                            </span>
                        </center>
                        <h3>What is right-size packaging?</h3>
                        <p>Today, several products in the market do not fit in standard-sized boxes, leaving many businesses to use padding and fillers to ensure product integrity. Right-size packaging minimizes and can even drop the need for extra packing materials.</p>
                        <p>So how do you make the switch? If you’re working with custom boxes, start by getting the correct measurements.</p>
                        <p>“Correct measurements assure you that products will fit correctly, the box itself will fit inside any secondary packaging, and you pay for the right shipping cost.”</p>
                        <p>Read more: <Link to="/">How to Measure Custom Boxes</Link></p>
                        <h3>What does right-size packaging look like?</h3>
                        <p>We’re glad you asked.</p>
                        <p>Let’s look at some amazing examples of right-size packaging from the Packola community. We’ll also highlight some benefits to better understand why fit-to-size boxes benefit your business and are convenient for your customers.</p>
                        <h3>It's cost-efficient</h3>
                        <p>Custom boxes that offer a snug fit for your products do not require packing fillers, reducing your packaging spend. That’s the clear advantage.</p>
                        <p>Take Creoworks, for instance. Their tabletop samples fit like a glove inside the box. No fillers needed, no wasted space. This brings us to our next point: right-size boxes allow you to save on shipping costs.</p>
                    </div>

                    <div className="boxing-content">
                        <img src={BlogImage} alt="boxing-img" className="w-100" />
                        <center>
                            <span className="subtext">
                            <Link to="/">Beam Dental</Link> is a digital-first dental insurance provider for small to mid-size businesses across the country focused on ease of use and preventive care.
                            </span>
                        </center>
                        <p>Today, several products in the market do not fit in standard-sized boxes, leaving many businesses to use padding and fillers to ensure product integrity. Right-size packaging minimizes and can even drop the need for extra packing materials.</p>
                        <p>So how do you make the switch? If you’re working with custom boxes, start by getting the correct measurements.</p>
                        <p>“Correct measurements assure you that products will fit correctly, the box itself will fit inside any secondary packaging, and you pay for the right shipping cost.”</p>
                        <p>Read more: <Link to="/">How to Measure Custom Boxes</Link></p>
                        <h3>What does right-size packaging look like?</h3>
                        <p>We’re glad you asked.</p>
                        <p>Let’s look at some amazing examples of right-size packaging from the Packola community. We’ll also highlight some benefits to better understand why fit-to-size boxes benefit your business and are convenient for your customers.</p>
                        <h3>It's cost-efficient</h3>
                        <p>Custom boxes that offer a snug fit for your products do not require packing fillers, reducing your packaging spend. That’s the clear advantage.</p>
                        <p>Take Creoworks, for instance. Their tabletop samples fit like a glove inside the box. No fillers needed, no wasted space. This brings us to our next point: right-size boxes allow you to save on shipping costs.</p>
                    </div>

                    <div className="boxing-content">
                        <img src={Natural} alt="boxing-img" className="w-100" />
                        <center>
                            <span className="subtext">
                            <Link to="/">Beam Dental</Link> is a digital-first dental insurance provider for small to mid-size businesses across the country focused on ease of use and preventive care.
                            </span>
                        </center>
                        <p>Today, several products in the market do not fit in standard-sized boxes, leaving many businesses to use padding and fillers to ensure product integrity. Right-size packaging minimizes and can even drop the need for extra packing materials.</p>
                        <p>So how do you make the switch? If you’re working with custom boxes, start by getting the correct measurements.</p>
                        <p>“Correct measurements assure you that products will fit correctly, the box itself will fit inside any secondary packaging, and you pay for the right shipping cost.”</p>
                        <h3>What does right-size packaging look like?</h3>
                        <p>We’re glad you asked.</p>
                        <p>Let’s look at some amazing examples of right-size packaging from the Packola community. We’ll also highlight some benefits to better understand why fit-to-size boxes benefit your business and are convenient for your customers.</p>
                        <p>Take Creoworks, for instance. Their tabletop samples fit like a glove inside the box. No fillers needed, no wasted space. This brings us to our next point: right-size boxes allow you to save on shipping costs.</p>
                    </div>
                </div>
                <div className="buttons">
                    <Link to='/blog/customer-stories' className= 'button'>
                    <FontAwesomeIcon icon={faAnglesLeft} style={{ color: "#000", width: "15px", height: "15px" }} />
                        Return to Customer Stories
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default BoxingContent;