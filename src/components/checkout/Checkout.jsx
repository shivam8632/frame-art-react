import React, { useState, useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';

import './checkout.scss';

import UserContext, { CartState } from '../context/UserContext';
import axios from 'axios';
import { API } from '../../config/api';
import { toast } from 'react-toastify';

const Checkout = () => {
    const {prodDimension, cartValue, setCheckValue, checkValue} = useContext(UserContext);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [apartment, setApartment] = useState("");
    const [code, setCode] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [state, setState] = useState("");
    const [email, setEmail] = useState("");

    const emptyData = () => toast.warn("Please fill out all the fields");

    const {
        state: { cart },
        dispatch,
      } = CartState();
      const [newTotal, setNewTotal] = useState();

      useEffect(() => {
        setNewTotal(
          cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
      }, [cart]);

    function handleSubmit(event) {
        event.preventDefault();
      }
    console.log('prodDimensionnnnnnnnnnnnnnnnnnnnnnnnnnnnnn', prodDimension);
    const navigate = useNavigate();

    const productValue = prodDimension.map(item => {
        return(
            item.value
        )
    })

    console.log("productValue", productValue)

    const checkButton = (event) => {
        event.preventDefault();

          axios.post(API.BASE_URL + 'order/post/',{
            user_id: 1,
            email: email,
            contact: phone,
            name: name,
            street_address: address,
            apartment: apartment,
            city: city,
            state: state,
            zip_code: code,
            items: prodDimension,
            total: cartValue,
        }, {})
        .then((response)=>{
            console.log("jsonkjbjkjkbi", response.data);
            setCheckValue(response.data);
            console.log("Check Value" ,checkValue);
            navigate('/payment');
        })

        .catch(function(error) {
            console.log(error.response);
            emptyData()
        })

          
    }

    console.log("Checkout", cart);

    const checkSaleButton = (event) => {
        event.preventDefault();

          axios.post(API.BASE_URL + 'order/post/',{
            user_id: 1,
            email: email,
            contact: phone,
            name: name,
            street_address: address,
            apartment: apartment,
            city: city,
            state: state,
            zip_code: code,
            items: cart,
            total: newTotal,
        }, {})
        .then((response)=>{
            console.log("jsonkjbjkjkbi", response.data);
            setCheckValue(response.data);
            console.log("Check Value" ,checkValue);
            navigate('/payment');
        })

        .catch(function(error) {
            console.log(error.response);
            emptyData()
        })

          
    }

    return(
        <div className="checkout">
            <Container>
                <h1 className='mb-5'>Shipping</h1>
                {prodDimension.length? (
                    <div className="checkout-container d-md-flex justify-content-between">
                        <div className="checkout-form">
                            <div className="heading w-100">
                                <h2 className='mb-0'>Shipping Address</h2>
                            </div>
                            <form  onSubmit={handleSubmit} className='d-flex flex-wrap justify-content-between'>
                                
                                <div className="input-container mb-4">
                                    <input type="text" placeholder='Full Name or Company' value={name} onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div className="input-container mb-4">
                                    <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="input-container mb-4">
                                    <input type="text" placeholder='Street Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                                </div>
                                <div className="input-container mb-4">
                                    <input type="text" placeholder='Apartment, Suite, etc' value={apartment} onChange={(e) => setApartment(e.target.value)} />
                                </div>
                                <div className="input-container small-input mb-4">
                                    <input type="text" placeholder='ZIP Code' value={code} onChange={(e) => setCode(e.target.value)} />
                                </div>
                                <div className="input-container small-input mb-4">
                                    <select name="" id=""  value={state} onChange={(e) => setState(e.target.value)}>
                                        <option value="">Select State</option>
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                        <option value="Australia">Australia</option>
                                    </select>
                                </div>
                                <div className="input-container mb-4">
                                    <input type="text" placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
                                </div>
                                <div className="input-container">
                                    <input type="number" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                            </form>
                        </div>
                        
                        <div className="productContent">
                            <h4>Order Summary</h4>
                           <div className="order">
                            {prodDimension.map((item, i) => {
                                return(
                                    <Accordion key={i}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>{item.product_name}</Accordion.Header>
                                        <Accordion.Body>
                                            {item.value.map((items, key) => {
                                                return <p key={key}><strong>{items.title}: </strong> <span>{items.value}</span></p>
                                            })}
                                            <p><strong>Quantity: </strong> {item.quantity}</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                )
                            })}
                            
                           </div>
                           <div className="subtotal my-3 py-3">
                           {prodDimension.map((item, i) => {
                            return <p className='text-dark' key={i}><strong>Subtotal: </strong> <span>${item.price}</span></p>
                           })}
                            
                            <p className='text-dark'><strong>Shipping: </strong> <span>$0</span></p>
                            <p className='text-dark mb-0'><strong>Tax: </strong> <span>$0</span></p>
                           </div>
                           <div className="total">
                                <h4>Order Total: <span>${cartValue}</span></h4>
                           </div>
                            <button onClick={checkButton}  className="bttn">Proceed to Payment</button>
                        </div>
                </div>
                )
                :
                cart.length > 0 ?  (
                    <div className="checkout-container d-md-flex justify-content-between">
                        <div className="checkout-form">
                            <div className="heading w-100">
                                <h2 className='mb-0'>Shipping Address</h2>
                            </div>
                            <form  onSubmit={handleSubmit} className='d-flex flex-wrap justify-content-between'>
                                
                                <div className="input-container mb-4">
                                    <input type="text" placeholder='Full Name or Company' value={name} onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div className="input-container mb-4">
                                    <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="input-container mb-4">
                                    <input type="text" placeholder='Street Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                                </div>
                                <div className="input-container mb-4">
                                    <input type="text" placeholder='Apartment, Suite, etc' value={apartment} onChange={(e) => setApartment(e.target.value)} />
                                </div>
                                <div className="input-container small-input mb-4">
                                    <input type="text" placeholder='ZIP Code' value={code} onChange={(e) => setCode(e.target.value)} />
                                </div>
                                <div className="input-container small-input mb-4">
                                    <select name="" id=""  value={state} onChange={(e) => setState(e.target.value)}>
                                        <option value="">Select State</option>
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                        <option value="Australia">Australia</option>
                                    </select>
                                </div>
                                <div className="input-container mb-4">
                                    <input type="text" placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
                                </div>
                                <div className="input-container">
                                    <input type="number" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                            </form>
                        </div>
                        
                        <div className="productContent saleContent">
                            <h4>Order Summary</h4>
                           <div className="order">
                            {cart.map((prod, i) => {
                                return(
                                    <Accordion key={i}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>{prod.name}</Accordion.Header>
                                        <Accordion.Body>
                                            <p><strong>Price: </strong> ₹ {prod.price}</p>
                                            <img src={prod.image} alt={prod.name} />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                )
                            })}
                            
                           </div>
                           <div className="subtotal my-3 py-3">
                           {prodDimension.map((item, i) => {
                            return <p className='text-dark' key={i}><strong>Subtotal: </strong> <span>${item.price}</span></p>
                           })}
                            
                            <p className='text-dark'><strong>Shipping: </strong> <span>$0</span></p>
                            <p className='text-dark mb-0'><strong>Tax: </strong> <span>$0</span></p>
                           </div>
                           <div className="total">
                                <h4>Order Total: <span>${newTotal}</span></h4>
                           </div>
                            <button onClick={checkSaleButton}  className="bttn">Proceed to Payment</button>
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

export default Checkout;
