
import React, { useState, useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import Breadcrumbs from '../../breadcrumbs/Breadcrumbs';
import BoxesProduct from '../../../assets/img/boxes-product.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import UserContext from '../../context/UserContext';
import productData from '../../data/Products';
import axios from 'axios';

import './ProductBanner.scss'

const ProductBanner = () => {
    const [lengthget, setlength] = useState('1');
    const [width, setwidth] = useState('1');
    const [depth, setdepth] = useState('1');
    const [paper, setpaper] = useState('14pt CardStock');
    const [coating, setcoating] = useState('Glossy Aqueous Coating');
    const [sides, setsides] = useState('Outside Only - Full Color');
    const [quantity, setquantity] = useState('100');
    const {setDimension} = useContext(UserContext);
    const [isShown, setIsShown] = useState(false);
    const [productList, setProductList] = useState([]);
    const [attributes, setAttributes] = useState([]);

    const handleSubmit= (e) => {
      e.preventDefault();

    }

    const handleClick = event => {
        setIsShown(current => !current);
        event.preventDefault();
    };

    const handleChange = (event, index, id) => {
        setProductList((prevState) => ({
            ...prevState,
            value: event.target.value
        }))
     }

    

    const getProduct = () => {
        setDimension({
            lengthget: lengthget,
            width: width,
            depth: depth,
            paper: paper,
            coating: coating,
            sides: sides,
            quantity: quantity
          })
    }

    useEffect(() => {
        axios.post('http://44.201.12.222:8000/list/post/', {})
      .then(function(response) {
          console.log("PRODUCTS" ,response);
          setProductList(response.data)
      })
      .catch(function(error) {
          console.log(error.response);
      })
    }, [])


    return(
        <div className="productbanner">
            <Container>
                <div className="breadcrumbs d-flex mb-4">
                    <Breadcrumbs />
                    <span className='ms-2'>/</span>
                    <span className='ms-2'>Product</span>
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
                                    {productList.map((data, i)=> {
                                        if(data.Field_type == 'Input field') {
                                            return(
                                                <div className="input-box" key={i}>
                                                    <label htmlFor="Length(in)">{data.Title}(in)</label>
                                                    <input 
                                                    name='length' 
                                                    type='number'
                                                    value={lengthget}
                                                    onChange={event => handleChange(event)}
                                                    />
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                    
                            </div>

                            {productList.map((data, i)=> {
                                if(data.Field_type == 'Dropdown') {
                                    return(
                                        <div className="input-box mb-3">
                                            <label>{data.Title}</label>
                                            <br />
                                            <select name={data.Title} value={data.Title} onChange={e => setpaper(e.target.value)}>

                                                {data.options.map((item, i) => {
                                                    return(
                                                        <option key={item.id} value={item.variant_type_name}>{item.variant_type_name}</option>
                                                    )
                                                })}

                                            
                                            </select>
                                        </div>
                                    )
                                }
                            })}

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

                                <button className='button' onClick={getProduct}>Order Now</button>

                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default ProductBanner;