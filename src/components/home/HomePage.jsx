import React from 'react';

import HomeBanner from './banner/Banner';
import HomeCollection from './collection/HomeCollection';
import HomeFrame from './WhyFrame/HomeFrame';
import CustomersHome from './customers/CustomersHome';
import FaqHome from './FaqHome/FaqHome';
import CustomerHome from './testimonials/TestimonialHome';

const HomePage = () => {
    return(
        <div className="home">
            <HomeBanner />
            {/* <HomeCollection /> */}
            <HomeFrame />
            <CustomersHome />
            <FaqHome />
            <CustomerHome />
        </div>
    )
}

export default HomePage;