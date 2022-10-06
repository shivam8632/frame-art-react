
import React, { useState, useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import Breadcrumbs from '../../breadcrumbs/Breadcrumbs';
import BoxesProduct from '../../../assets/img/boxes-product.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import UserContext from '../../context/UserContext';
import productData from '../../data/Products';
import axios from 'axios';
import {toast } from 'react-toastify';

import './ProductBanner.scss';

import { API } from '../../../config/api';
import BoxModel from '../../box-model/BoxModel';

const ProductBanner = () => {
    const {addDimension} = useContext(UserContext);
    const [isShown, setIsShown] = useState(false);
    const [advice, setAdvice] = useState([]);
    const [attributes, setAttributes] = useState([]);
    const [price, setPrice] = useState();
    const [prodName, setProdName] = useState()
    const [productQuantity, setProductQuantity] = useState('');
    const quantityChange = event => {
        console.log(event.target.value);
        setProductQuantity(event.target.value);
    };

    const cart = () => toast.success("Product Added Successfully!");
    const cartError = () => toast.warn("Please add all the Information");

    var token = localStorage.getItem('loginToken');

    console.log('loginToken', token)


    const setData = (e,item,key) =>{
        let oldAttributes =  attributes ;
        console.log(typeof parseInt(e.target.value)=='NaN')
        oldAttributes[key] = {
            element_id:parseInt(item.element_id),
            variant_type_id:parseInt(item.options[0].id),
            value: isNaN(parseFloat(e.target.value)) ? e.target.value : parseFloat(e.target.value),
            title: item.Title
        };
        setAttributes(oldAttributes);
        console.log("Attributes", oldAttributes);
    }
    console.log("QUANTITY", productQuantity)

    useEffect(() => {
        const fetchList = async () => {
            axios.post('http://44.201.12.222:8000/product_list/post/',{}, {})
            .then((response)=>{
              console.log('POST PRODUCTS')
              console.log(response);
              console.log("PRODUCT NAME", response.data[0].product_name);
              setProdName(response.data[0].product_name);
            //   setCartValue(response.data.length);
            })
    
            .catch(function(error) {
                console.log(error.response);
                
            })
        }
        fetchList();
    }, []);

    useEffect(() => {
        
        const fetchList = () => {
            axios.post(API.BASE_URL + 'list/post/',{}, {})
            .then((response) =>{
                console.log("jsonnnnnn",response)
                setAdvice(response.data);
            })
    
            .catch(function(error) {
                console.log(error.response);
                
            })
        }
        fetchList();
    }, []);


    const handleClick = event => {
        setIsShown(current => !current);
        event.preventDefault();
    };

    const getProduct = event => {
        console.log('Click on Order')
        event.preventDefault();
        if(attributes.length > 7) {
            addDimension({
                value: attributes,
                quantity: productQuantity,
                price: price,
                product_name: prodName,
            })
            
                cart()
        }

        else {
            cartError()
        }
      
    }


   if(attributes.length > 7) {
    const priceFetch = async () => {

        axios.post(API.BASE_URL + 'calculateprice/price/',{
            product_id: 1,
            category_id: 1,
            quantity: parseInt(productQuantity),
            attributes: attributes
        }, {})
        .then((response)=>{
          console.log('POST PRICE')
            console.log("json", response);
            setPrice(Math.round(response.data.Total));
        })

        .catch(function(error) {
            console.log(error.response);
            
        })
    }
    priceFetch();
   }


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
                            {/* <img src={BoxesProduct} alt="product-img" className='w-100' /> */}
                            <BoxModel />
                        </div>
                    </div>
                    <div className="product-form mt-5 mt-md-0">
                        <div className="form-heading d-flex align-items-center">
                            <FontAwesomeIcon icon={faArrowDown} style={{ color: '#FFF' }} />
                            <h2 className='mb-0 text-white ms-2'>Customize and Check Prices</h2>
                        </div>
                        <div className="form">
                            <div className="dimensions mb-3">
                                <label className='label-parent mb-3'>Enter Interior Dimensions</label>
                                <div className="dimensions-list d-flex flex-wrap justify-content-between">
                                    {
                                       advice.length > 0 && advice.map((item,key) => {
                                            if(item.Field_type === 'Input field') {
                                                return (
                                                    <div className="input-box">
                                                        <label htmlFor="Length(in)">{item.Title}</label>
                                                        <input 
                                                            name={item.Title}
                                                            type='number'
                                                            step='0.25'
                                                            min='0.25'
                                                            max='6'
                                                            onChange={(event)  => setData(event,item,key)}
                                                        />
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>    
                            </div>

                            {
                               advice.length > 0 && advice.map((item,key) => {

                                    if(item.Field_type === 'Dropdown') {
                                        return (
                                            <div className="input-box mb-3">
                                            <label>{item.Title}</label>
                                            <br />
                                            <select name={item.Title} onChange={(event)  => setData(event,item,key)}>
                                            <option>Select</option>
                                                {item.options.map((items) => {
                                                    return(
                                                        <option value={items.variant_type_name} selected={items.Title}>{items.variant_type_name}</option>
                                                    )
                                                })}  
                                            </select>
                                            </div>
                                        )
                                    }
                                })
                            }

                            <div className="input-box mb-3">
                                <label>Quantity</label>
                                <br />
                                <select name="Quantity" value={productQuantity} onChange={quantityChange}>  
                                    <option>Select</option>
                                    {productData.items.map((item) => (
                                        <option>{item.quantity}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="total mb-3">
                                <span className="each-price">$3.77 each</span>
                                <div className="share-button d-flex  mb-2">
                                    <span id="share">
                                    <FontAwesomeIcon icon={faShare} style={{ color: "#000", width: "14px", height: "14px" }} />
                                    </span>
                                    <span className="subtotal w-100 ms-2 d-flex">
                                        <span className="subtotal me-2 d-flex">Subtotal: ${price}</span>
                                    </span>
                                </div>
                                {/* <div className="match">
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
                                </div> */}
                            </div>

                            {/* <div className="time mb-3">
                                <p className='mb-2'><strong>Production Time:</strong> Standard (8-10 Business Days)</p>
                                <div className="check d-flex align-items-center">
                                    <input type="checkbox" name="" id="production" />
                                    <label className='ms-2' htmlFor="production">Rush Production</label>
                                </div>
                            </div> */}

                            <div className="buttons">

                                <button className='button' onClick={getProduct}>Order Now</button>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default ProductBanner;