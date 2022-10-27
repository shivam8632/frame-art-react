import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import './cart.scss';

import UserContext from '../context/UserContext';
const Cart = () => {
    const {prodDimension, setCartValue, cartValue} = useContext(UserContext);
    console.log('prodDimension', prodDimension)
    console.log("LOC" ,localStorage.getItem('cartProduct'))
    const navigate = useNavigate();
    const user = localStorage.getItem('loginToken');
    

    const checkLog = () => toast.warn("Please Log In to Proceed");

  
    var total=0;
    for(let i = 0; i < prodDimension.length; i++){
           total+=prodDimension[i]['price'];
    };
    console.log(" total ", total);
    setCartValue(total);

    const checkAuth = () => {
        if(user) {
            navigate('/checkout')
        }
        else {
            checkLog();
        }
    }

    return(
        <div className="cart">
            <Container>
                <h1 className='mb-5'>Cart</h1>
                {prodDimension.length > 0 ? (
                    <div className="cart-container">
                        <div className="cart-main ">
                        {prodDimension?.map((item, i) => {
                            return(
                                <div className="productContent" key={i}>
                                {item.value?.map((itemContent, key) => {
                                    return <p key={key}><strong>{itemContent.title}: </strong> <span>{itemContent.value}</span></p>
                                })}
                                <p><strong>Quantity: </strong> {item.quantity}</p>
                                <p><strong>Total: </strong> <span className='total'>${item.price}</span></p>
                            </div>
                            )
                        })}
                    </div>
                        <div className="subtotal">
                        <h2>Subtotal</h2>
                            <p>${cartValue}</p>
                            <button className='bttn' onClick={checkAuth}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )
                :
                <h2>No Products Found</h2>
            }
            </Container>
        </div>
    )
}

export default Cart;
