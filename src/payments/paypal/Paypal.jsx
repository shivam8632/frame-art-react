import React, { useState, useEffect, useContext } from "react";
import Container from 'react-bootstrap/Container';
import { API } from '../../config/api';
import axios from "axios";
// import '../stripe/strpie.scss';
import { useNavigate } from 'react-router-dom';
import UserContext from "../../components/context/UserContext";


export default function Paypal() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const {cartValue} = useContext(UserContext);
    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    
    const handleName = (e) => {
    setName(e.target.value);
    }

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
    };

    const payFunc = async () => {
        axios.post(API.BASE_URL + 'paypal/',{
        "user_id":3,
        "order_id":3,
        "total": cartValue,
        "name":  name,
        "email": email
        })
        .then((response)=>{
            console.log('POST PRODUCTS')
            console.log(response);
            // axios.post(API.BASE_URL + 'paypal/capturepayment/')
            // .then(() => {
            //     navigate('/thankyou')
            // })
            
        })

        .catch(function(error) {
            console.log(error.response);
            
        })
    }

  return (
    <section className="stripe-container">
        <Container>
            <div className="heading">
            <h2>Paypal Payment</h2>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="input-container">
                <input type="text" value={email} onChange={handleEmail} placeholder="Enter Email" />
            </div>
            <div className="input-container">
                <input type="text" value={name} onChange={handleName} placeholder="Name on Card" />
            </div>
            <button className='bttn' onClick={payFunc}>
                Pay
            </button>
            </form>
        </Container>
    </section>
  )
}
