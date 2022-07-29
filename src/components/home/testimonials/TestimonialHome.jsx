import React from 'react';
import Masonry from "react-masonry-css";
import Container from 'react-bootstrap/Container';

import './TestimonialHome.scss';

let items = [
  {
    name: 'Chase',
    title: 'Everything I could have asked for',
    content: 'The Packola Team was everything I could have asked for when starting my subscription box company. Their customer service is excellent, they worked with me tirelessly to make sure I was getting everything I needed, and I was very impressed with their knowledge and ability to share their knowledge with me in a way I could understand with no previous box experience. The build your box feature on the website is top of the line, and would highly recommend them to anyone with their box needs.'
  },
  {
    name: 'Justin Lawrence',
    title: 'These are the Box Bosses',
    content: 'Great site with lots of options and I really appreciate being able to check the pricing on each style of box. Also being able to see a 3D version of my customized box is a game changer! I will definitely be back to order more boxes.',
  },
  {
    name: 'Sonya Donley-Nutt',
    title: 'On time and beautiful',
    content: 'My box came on time and looks beautiful. 4 stars price could be a little friendlier'
  },
  {
    name: 'Abigail Chewnin',
    title: 'They are perfect',
    content: 'The boxes are perfect! Just what I wanted, the cardboard was sturdy and had a nice gloss to it. The images turned out great. No damage to the boxes :) Thank you!'
  },
  {
    name: 'Sonya Donley-Nutt',
    title: 'On time and beautiful',
    content: 'My box came on time and looks beautiful. 4 stars price could be a little friendlier'
  },
  {
    name: 'Chase',
    title: 'Everything I could have asked for',
    content: 'The Packola Team was everything I could have asked for when starting my subscription box company. Their customer service is excellent, they worked with me tirelessly to make sure I was getting everything I needed, and I was very impressed with their knowledge and ability to share their knowledge with me in a way I could understand with no previous box experience. The build your box feature on the website is top of the line, and would highly recommend them to anyone with their box needs.'
  },
  {
    name: 'Abigail Chewnin',
    title: 'They are perfect',
    content: 'The boxes are perfect! Just what I wanted, the cardboard was sturdy and had a nice gloss to it. The images turned out great. No damage to the boxes :) Thank you!'
  },
  {
    name: 'Justin Lawrence',
    title: 'These are the Box Bosses',
    content: 'Great site with lots of options and I really appreciate being able to check the pricing on each style of box. Also being able to see a 3D version of my customized box is a game changer! I will definitely be back to order more boxes.',
  },
  
];

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

const CustomerHome = () => {
  return (
    <div className="customer">
        <Container>
            <div className="heading mb-4">
                <h2 className='text-center fs-1 fw-bold'>Customer Reviews</h2>
                <p>Our reputation is built upon trust and customer satisfaction. Read on for our loyal customers testimonials.</p>
            </div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid "
                columnClassName="my-masonry-grid_column"
            >
                {items.map((item,i) => (
                    <div className='masonry-item p-4' key={i}>
                        <h3 className='text-center mb-0'>{item.name}</h3>
                        <h4 className='text-center pt-3 pb-2'>{item.title}</h4>
                        <p className='text-center'>{item.content}</p>
                    </div>
                ))}
            </Masonry>
        </Container>
    </div>
  );
}

export default CustomerHome;