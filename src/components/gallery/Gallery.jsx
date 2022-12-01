import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import { API } from '../../config/api';
import axios from 'axios';

import './gallery.scss';

const Gallery = () => {
    const [galleryContent, setGalleryContent] = useState(['']);

    useEffect(() => {
        axios.get(API.BASE_URL + 'adminpanel/gallerylist/',{}, {})
        .then((response)=>{
          console.log("Gallerylist", response);
          setGalleryContent(response.data);
        })

        .catch(function(error) {
            console.log(error.response);
            
        })
    }, [])

    return(
        <div className="gallery">
            <Container>
                <h1 className='mb-4'>Gallery</h1>
                <div className="gallery-list d-flex flex-wrap mt-4">
                    {galleryContent.map((galleryImg) => {
                        return(
                            <div className="gallery-box" key={galleryImg.id}>
                                <img src={'http://13.210.246.45:8000' + galleryImg.image} alt="image" />
                            </div>
                        )
                    })}
                </div>
            </Container>
        </div>
    );
}

export default Gallery;