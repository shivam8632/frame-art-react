import React from 'react';
import Masonry from "react-masonry-css";
import Container from 'react-bootstrap/Container';


// import './TestimonialHome.scss';
import TestimonialList from '../../masonary/TestimonialsList';




const CustomerHome = () => {

  return (
    <div className="customer">
        <Container>
            <div className="heading mb-4">
                <h2 className='text-center fs-1 fw-bold'>Customer Reviews</h2>
                <p>Our reputation is built upon trust and customer satisfaction. Read on for our loyal customers testimonials.</p>
            </div>
            <TestimonialList />

                   </Container>
    </div>
  );
}

export default CustomerHome;