import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import materialData from '../data/material';
import './Material.scss';

const Material = () => {
    console.log(materialData.items.image);
    return(
        <div className="material">
            <Container>
                <h1 className='mb-4'>Material</h1>
                <div className="material-list d-flex flex-wrap">
                    {materialData.items.map((item,i) => (
                        <div className="material-box" key={i}>
                            <img src={item.image} alt="material-img" />
                            <div className="material-text">
                                <h3>{item.text}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Material;