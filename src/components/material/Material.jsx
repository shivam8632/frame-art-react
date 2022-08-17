import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import materialData from '../data/material';
import './Material.scss';

const Material = () => {
    return(
        <div className="material">
            <Container>
                <h1 className='mb-4'>Material</h1>
                <div className="material-list d-flex flex-wrap mt-4">
                    <h2 className='w-100 mb-4 fs-3'>Opaque</h2>
                    {materialData.opaque.map((item,i) => (
                        <div className="material-box" key={i}>
                            <img src={item.image} alt="material-img" />
                            <div className="material-text">
                                <h3>{item.text}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="material-list d-flex flex-wrap mt-4">
                    <h2 className='w-100 mb-4 fs-3'>1/8" Acrylic Back</h2>
                    {materialData.transparent.map((item,i) => (
                        <div className="material-box" key={i}>
                            <img src={item.image} alt="material-img" />
                            <div className="material-text">
                                <h3>{item.text}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="material-list d-flex flex-wrap mt-4">
                    <h2 className='w-100 mb-4 fs-3'>Stand off Base</h2>
                    {materialData.standoff.map((item,i) => (
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