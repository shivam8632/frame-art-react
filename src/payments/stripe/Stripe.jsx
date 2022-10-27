import React, { useState, useEffect, useContext } from "react";
import Container from 'react-bootstrap/Container';
import { API } from '../../config/api';
import axios from "axios";
import './stripe.scss';
import { useNavigate } from 'react-router-dom';
import Loader from "../../components/loader/Loader";


const ProductDisplay = () => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleNumber = (e) => {
    setNumber(e.target.value);
  }

  const handleMonth = (e) => {
    setMonth(e.target.value);
  }

  const handleYear = (e) => {
    setYear(e.target.value);
  }

  const handleCvv = (e) => {
    setCvv(e.target.value);
  }

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
  };

    const stripePay = async () => {
      // if(loading) {
      //   <Loader />
      // }
      // else if(!loading) {
      //   navigate('/thankyou');
      // }
        axios.post(API.BASE_URL + 'stripe/',{
          "name": name,
          "number": number,
           "exp_month": month,
           "exp_year": year,
           "cvc": cvv,
           "email": email 
        })
        .then((response)=>{
          console.log('POST PRODUCTS')
          console.log(response);
          // setLoading(true)
          navigate('/thankyou')
        })

        .catch(function(error) {
            console.log(error.response);
            
        })
    }

    return(
        <section className="stripe-container">
            <Container>
              <div className="heading">
                <h2>Stripe Payment</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="input-container">
                  <input type="text" value={email} onChange={handleEmail} placeholder="Enter Email" />
                </div>
                <div className="input-container">
                  <input type="text" value={number} onChange={handleNumber} placeholder="Card Number" />
                </div>
                <div className="input-container card-info">
                  <div className="number-month">
                    <input type="number" value={month} onChange={handleMonth} placeholder="Valid Through (MM/YY)" />
                    <input type="number" value={year} onChange={handleYear} placeholder="Valid Through (MM/YY)" />
                  </div>
                  <input type="number" value={cvv} onChange={handleCvv} placeholder="CVV" />
                </div>
                <div className="input-container">
                  <input type="text" value={name} onChange={handleName} placeholder="Name on Card" />
                </div>
                <div className="input-container">
                  <input type="text" placeholder="Card Nickname" />
                </div>
                <button className='bttn' onClick={stripePay}>
                  Pay
                </button>
              </form>
            </Container>
        </section>
    )
};

export default ProductDisplay