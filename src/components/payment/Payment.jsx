import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons';

import './payment.scss';

import UserContext from '../context/UserContext';
const Payment = () => {
    const {checkValue} = useContext(UserContext);
    console.log(checkValue)

    return(
        <div className="cart">
            <Container>
                <h1 className='mb-5'>Payment</h1>
                    <div className="cart-container">
                        <div className="cart-main product-main">
                            <div className="productContent">
                            <p><strong>Apartment: </strong> {checkValue.apartment}</p>
                            <p><strong>City: </strong> {checkValue.city}</p>
                            <p><strong>Contact: </strong> {checkValue.contact}</p>
                            <p><strong>Email: </strong> {checkValue.email}</p>
                            <p><strong>Name: </strong> {checkValue.name}</p>
                            <p><strong>State: </strong> {checkValue.state}</p>
                            <p><strong>Street Address: </strong> {checkValue.street_address}</p>
                            <p><strong>Zip Code: </strong> {checkValue.zip_code}</p>
                            {checkValue.item.map((items, i) => {
                                return(
                                    <>
                                    <p><strong>Price: </strong> {items.price}</p>
                                        <p><strong>Quantity: </strong> {items.quantity}</p>
                                        {items.value.map(itemValue => {
                                            return(
                                                <p><strong>{itemValue.title}: </strong> {itemValue.value}</p>
                                            )
                                        })}
                                    </>
                                )
                            })}
                            </div>
                            <div className="cardContent">
                                <h4>Select Payment Method</h4>
                                <div className="payment-list">
                                    <Link to='/stripe'>
                                        <button className="payment-card">
                                            <FontAwesomeIcon icon={faCreditCard} style={{ color: '#000' }} />
                                            <p>Card</p>
                                        </button>
                                    </Link>
                                    <Link to='/paypal'>
                                        <button className="payment-card">
                                            <FontAwesomeIcon icon= {faCcPaypal} />
                                            <p>Paypal</p>
                                        </button>
                                    </Link>
                                       
                                </div>
                            </div>  
                        </div>
                    </div>
            </Container>
        </div>
    )
}

export default Payment;
