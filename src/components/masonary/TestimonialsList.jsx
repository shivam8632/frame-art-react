import React from 'react';
import Masonry from "react-masonry-css";

import '../home/testimonials/TestimonialHome.scss';
import data from '../data/Reviews';
import TestimonialContent from './TestimonialContent';

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

const TestimonialList = () => {
  return (
        <>
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid "
            columnClassName="my-masonry-grid_column"
        >

          {data.items.map((item, i) => (
            <TestimonialContent name={item.name} title={item.title} content={item.content} key={i} />
          ))}

        </Masonry>
        </>
  );
}

export default TestimonialList;