import React, { useState, useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CartState } from '../context/UserContext';
import './cart.scss';
import { Button, Col, Image, ListGroup, Row } from "react-bootstrap";

import UserContext from '../context/UserContext';
const Cart = () => {
    const {prodDimension, setCartValue, cartValue} = useContext(UserContext);
    console.log('prodDimensionCart', prodDimension)
    console.log("LOC" ,localStorage.getItem('cartProduct'))
    const navigate = useNavigate();
    const user = localStorage.getItem('loginToken');

    const checkLog = () => toast.warn("Please Log In to Proceed");

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
                cart.length > 0 ? (
                <div className='cart-container'>
                    <ListGroup>
                        {cart.map((prod) => (
                            <ListGroup.Item key={prod.id}>
                                <Row>
                                    <Col md={4}>
                                        <Image src={prod.image} alt={prod.name} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <span>{prod.name}</span>
                                    </Col>
                                    <Col md={3}>₹ {prod.price}</Col>
                                    {/* <Col md={2}>
                                    <Form.Control
                                        as="select"
                                        value={prod.qty}
                                        onChange={(e) =>
                                        dispatch({
                                            type: "CHANGE_CART_QTY",
                                            payload: {
                                            id: prod.id,
                                            qty: e.target.value,
                                            },
                                        })
                                        }
                                    >
                                        {[...Array(prod.inStock).keys()].map((x) => (
                                        <option key={x + 1}>{x + 1}</option>
                                        ))}
                                    </Form.Control>
                                    </Col> */}
                                    <Col md={2}>
                                    <Button
                                        type="button"
                                        variant="light"
                                        onClick={() =>
                                        dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: prod,
                                        })
                                        }
                                    >
                                        {/* <AiFillDelete fontSize="20px" /> */}
                                    </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <div className="filters summary">
                        <span className="title">Subtotal ({cart.length}) items</span>
                        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {newTotal}</span>
                        <Button type="button" disabled={cart.length === 0} onClick={checkAuth}>
                            Proceed to Checkout
                        </Button>
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
