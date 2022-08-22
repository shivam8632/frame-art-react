import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import materialData from '../data/material';
import './Material.scss';

const Material = () => {
    return(
        <div className="material">
            <Container>
                <h1 className='mb-4'>Materials</h1>
                <div className="material-list d-flex flex-wrap mt-4">
                    <h2 className='w-100 mb-4 fs-3'>5/8" TFL (thermally infused laminate)</h2>
                    {materialData.laminate.map((item,i) => (
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
                <div className="material-list d-flex flex-wrap mt-4">
                    <h2 className='w-100 mb-4 fs-3'>1/8" Acrylic Back</h2>
                    <div className="transparent w-100 d-flex flex-wrap">
                        <div className="sub-heading w-100 mb-3">
                            <h5>Transparent Colors</h5>
                        </div>
                        {materialData.transparent.map((item,i) => (
                            <div className="material-box" key={i}>
                                <img src={item.image} alt="material-img" />
                                <div className="material-text">
                                    <h3>{item.text}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="note text-white w-100">**NOTE** :- White base is recommended for all transparent colours</p>
                    <div className="opaque w-100 d-flex flex-wrap">
                        <div className="sub-heading w-100 mb-3">
                            <h5>Opaque Colors</h5>
                        </div>
                        {materialData.opaque.map((item,i) => (
                            <div className="material-box" key={i}>
                                <img src={item.image} alt="material-img" />
                                <div className="material-text">
                                    <h3>{item.text}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Material;