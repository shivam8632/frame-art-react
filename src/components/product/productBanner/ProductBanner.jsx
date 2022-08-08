
import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';

import Breadcrumbs from '../../breadcrumbs/Breadcrumbs';
import BoxesProduct from '../../../assets/img/boxes-product.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import UserContext from '../../context/UserContext';
import productData from '../../data/Products';

import './ProductBanner.scss'

const ProductBanner = () => {
    const [length, setlength] = useState();
    const [width, setwidth] = useState();
    const [depth, setdepth] = useState();
    const [paper, setpaper] = useState();
    const [coating, setcoating] = useState();
    const [sides, setsides] = useState();
    const [quantity, setquantity] = useState();
<<<<<<< HEAD
    const [prod, setProd] = useState(productData);
    const {getProd}= useContext(UserContext); //Product Detail
=======
>>>>>>> 7065b2c93f53f5d91ade4383afa827e5018db14d

    const [isShown, setIsShown] = useState(false);
    const handleSubmit= (e) => {
      e.preventDefault();
    }

    const handleClick = event => {
        setIsShown(current => !current);
<<<<<<< HEAD
        event.preventDefault();
    };

    const getProduct = () => {
        getProd({
            user_name: ''
          })
    }
=======
      };
>>>>>>> 7065b2c93f53f5d91ade4383afa827e5018db14d

    return(
        <div className="productbanner">
            <Container>
                <div className="breadcrumbs d-flex mb-4">
                    <Breadcrumbs />
                    <span className='ms-2'>/</span>
                    <span className='ms-2'>Home</span>
                </div>
                <div className="product-container d-md-flex justify-content-between">
                    <div className="product-image">
                        <div className="heading">
                            <h2 className='w-100'>Custom Printed Product Boxes</h2>
                            <p>High quality printing on Cardstock or Corrugated material.</p>
                        </div>
                        <div className="prod-image">
                            <img src={BoxesProduct} alt="product-img" className='w-100' />
                        </div>
                    </div>
                    <div className="product-form mt-5 mt-md-0">
                        <div className="form-heading d-flex align-items-center">
                            <FontAwesomeIcon icon={faArrowDown} style={{ color: '#FFF' }} />
                            <h2 className='mb-0 text-white ms-2'>Customize and Check Prices</h2>
                        </div>
                        <form onSubmit={e => { handleSubmit(e) }}>
                            <div className="dimensions mb-3">
                                <label className='label-parent mb-3'>Enter Interior Dimensions</label>
                                <div className="dimensions-list d-flex flex-wrap justify-content-between">
                                    <div className="input-box">
                                        <label htmlFor="Length(in)">Length(in)</label>
                                        <input 
                                        name='length' 
                                        type='number'
                                        value={length}
                                        onChange={e => setlength(e.target.value)}
                                        />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="Width(in)">Width(in)</label>
                                        <input 
                                        name='width' 
                                        type='number'
                                        value={width}
                                        onChange={e => setwidth(e.target.value)}
                                        />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="Depth(in)">Depth(in)</label>
                                        <input 
                                        name='depth' 
                                        type='number'
                                        value={depth}
                                        onChange={e => setdepth(e.target.value)}
                                        />
                                    </div>
                                </div>
                                    
                            </div>
                            <div className="input-box mb-3">
                                <label>Paper</label>
                                <br />
                                <select name="paper" value={paper} onChange={e => setpaper(e.target.value)}>
<<<<<<< HEAD
                                    {productData.items.map((item, i) => {
                                        return(
                                            <option value="" key={i}>{item.paper}</option>
                                        )
                                    })}
=======
                                    <option value="">14pt CardStock</option>
                                    <option value="">18pt CardStock</option>
                                    <option value="">24pt CardStock</option>
                                    <option value="">Corrugated Cardboard</option>
>>>>>>> 7065b2c93f53f5d91ade4383afa827e5018db14d
                                </select>
                            </div>
                            <div className="input-box mb-3">
                                <label>Coating</label>
                                <br />
                                <select name="paper" value={coating} onChange={e => setcoating(e.target.value)}>
<<<<<<< HEAD
                                    {productData.items.map((item, i) => {
                                        return(
                                            <option value="" key={i}>{item.coating}</option>
                                        )
                                        })}
=======
                                    <option value="">Glossy Aqueous Coating</option>
                                    <option value="">Matte Aqueous Coating</option>
                                    <option value="">High Gloss UV Coating</option>
                                    <option value="">Soft Touch Laminate</option>
>>>>>>> 7065b2c93f53f5d91ade4383afa827e5018db14d
                                </select>
                            </div>
                            <div className="input-box mb-3">
                                <label>Printed Sides</label>
                                <br />
                                <select name="paper" value={sides} onChange={e => setsides(e.target.value)}>
<<<<<<< HEAD
                                    {productData.items.map((item, i) => {
                                        return(
                                            <option value="" key={i}>{item.sides}</option>
                                        )
                                    })}
=======
                                    <option value="">Outside Only - Full Color</option>
                                    <option value="">Inside Only - Full Color</option>
                                    <option value="">Outside & Inside Only - Full Color</option>
                                    <option value="">No Printing (blank)</option>
>>>>>>> 7065b2c93f53f5d91ade4383afa827e5018db14d
                                </select>
                            </div>
                            <div className="input-box mb-3">
                                <label>Quantity</label>
                                <br />
                                <select name="paper" value={quantity} onChange={e => setquantity(e.target.value)}>
<<<<<<< HEAD
                                    {productData.items.map((item, i) => {
                                        return(
                                            <option value="" key={i}>{item.quantity}</option>
                                        )
                                    })}
=======
                                    <option value="">1</option>
                                    <option value="">100</option>
                                    <option value="">150</option>
                                    <option value="">200</option>
                                    <option value="">250</option>
                                    <option value="">500</option>
                                    <option value="">750</option>
                                    <option value="">1000</option>
                                    <option value="">1500</option>
                                    <option value="">2000</option>
>>>>>>> 7065b2c93f53f5d91ade4383afa827e5018db14d
                                </select>
                            </div>

                            <div className="total mb-3">
                                <span className="each-price">$3.77 each</span>
                                <div className="share-button d-flex  mb-2">
                                    <span id="share">
                                    <FontAwesomeIcon icon={faShare} style={{ color: "#000", width: "14px", height: "14px" }} />
                                    </span>
                                    <span className="subtotal w-100 ms-2 d-flex">
                                        <span className="subtotal me-2 d-flex">Subtotal: </span>
                                        <span> $582.50</span>
                                    </span>
                                </div>
                                <div className="match">
                                    <button className="match-button" onClick={handleClick}>We price match</button>
                                    {isShown && (
                                    <div className="match-content">
                                        <div className="content">
                                            <h2>Price Match Policy</h2>
                                            <p>If you have a lower quote from a competitor for the same product and specifications, email us the quote and we will do our best to match the price for you. Make sure you include tax and shipping in your quote.</p>
                                            <div className="buttons">
                                                <button onClick={handleClick}>OK</button>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                </div>
                            </div>

                            <div className="time mb-3">
                                <p className='mb-2'><strong>Production Time:</strong> Standard (8-10 Business Days)</p>
                                <div className="check d-flex align-items-center">
                                    <input type="checkbox" name="" id="production" />
                                    <label className='ms-2' htmlFor="production">Rush Production</label>
                                </div>
                            </div>

                            <div className="buttons">
<<<<<<< HEAD
                                <button className='button' onClick={getProduct}>Order Now</button>
=======
                                <button className='button'>Order Now</button>
>>>>>>> 7065b2c93f53f5d91ade4383afa827e5018db14d
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProductBanner;