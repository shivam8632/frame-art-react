import React from 'react';
import '../home/testimonials/TestimonialHome.scss';


const TestimonialContent = (props) => {
  return (
    <div className='masonry-item p-4'>
        <h3 className='text-center mb-0'>{props.name}</h3>
        <h4 className='text-center pt-3 pb-2'>{props.title}</h4>
        <p className='text-center'>{props.content}</p>
    </div>
  );
}

export default TestimonialContent;