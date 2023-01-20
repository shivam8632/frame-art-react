import React, {useState, useEffect} from 'react';
import '../home/testimonials/TestimonialHome.scss';
import { API } from '../../config/api';
import axios from 'axios';


const TestimonialContent = (props) => {
  const [reviewColor, setReviewColor] = useState([]);
  useEffect(() => {
    axios.get(API.BASE_URL + 'adminpanel/reviews-color-list/',{}, {})
        .then((response)=>{
          setReviewColor(response.data)
          console.log("Reviews Color", response)
        })

        .catch(function(error) {
            console.log(error.response);
            
        })
  }, [])
  return (
    <>
      {
        reviewColor?.map((reviewItem) => {
          return(
            <div className='masonry-item p-4' style={{background: reviewItem.background}}>
                <h3 className='text-center mb-0' style={{color: reviewItem.name}}>{props.name}</h3>
                <h4 className='text-center pt-3 pb-2' style={{color: reviewItem.title}}>{props.title}</h4>
                <p className='text-center' style={{color: reviewItem.content}}>{props.content}</p>
            </div>
          )
        })
      }
    </>
  );
}

export default TestimonialContent;