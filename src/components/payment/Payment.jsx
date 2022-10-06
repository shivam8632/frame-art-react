import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config/api';
import axios from 'axios';
import PaymentForm from '../../payments/stripe/Stripe';
import StripeContainer from '../StripeContainer';

import './payment.scss';

import UserContext from '../context/UserContext';
const Payment = () => {
    const {checkValue} = useContext(UserContext);
    const navigate = useNavigate();
    console.log(checkValue)

    const payButton = (event) => {
        event.preventDefault();
        navigate('/paymentForm');

        //   axios.post(API.BASE_URL + 'stripe/', {
        //     xsrfCookieName: 'csrf_token',
        //     xsrfHeaderName: 'X-CSRFTOKEN',
        //     withCredentials: true
        //   })
        // .then((response)=>{
        //     console.log("Stripe Payment", response.data);
        // })

        // .catch(function(error) {
        //     console.log(error.response);
            
        // })

          
    }

    return(
        <div className="cart">
            <Container>
                <h1 className='mb-5'>Payment</h1>

                    <div className="cart-container">
                        <div className="cart-main ">
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
                            <div className="bttn mt-4">
                            <PaymentForm />
                            </div>
                            
                        </div>
                    </div>
            </Container>
        </div>
    )
}

export default Payment;
