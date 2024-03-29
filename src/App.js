import React from 'react';

import './App.scss';

import Routing from './routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from './components/context/UserContext';
import { CartState } from './components/context/UserContext';

import { API } from './config/api';

function App() {
  const { setAuth, prodDimension } = useContext(UserContext); //Login Context
  const { state: { products } } = CartState();
    console.log('Products Check Appjs', products)

  useEffect(() => {
    localStorage.getItem('cartProduct');
    localStorage.getItem("cartProducts");
    var token = localStorage.getItem('loginToken');
    localStorage.getItem("newCart");
    console.log("NEWWWWWWWW APPPPPPPP" ,localStorage.getItem("newCart"));
    console.log(token)
    if (token != null) {
      console.log('Get Login Token', token)
      axios.post(API.BASE_URL + 'userprofile/',{}, {
        headers: { 'Authorization' : `Bearer ${token}` }
      })
        .then((res) => {
          console.log("USerProfile", res)
          setAuth({
            user_name: res.data.First_name,
            last_name: res.data.Last_name,
            email: res.data.email,
            id: res.data.id
          })
          console.log('profile Get', res.data.First_name);
        })

        .catch(function (error) {
          localStorage.clear();
          console.log(error.response);

        })

    }
  }, [])

  useEffect(() => {
      JSON.parse(localStorage.getItem("addedQuantity"));
      console.log("Quantity in Cart", JSON.parse(localStorage.getItem("addedQuantity")));

      JSON.parse(localStorage.getItem("addedPrice"));
      console.log("Price in Cart", JSON.parse(localStorage.getItem("addedPrice")));

      JSON.parse(localStorage.getItem("addedName"));
      console.log("Name in Cart", JSON.parse(localStorage.getItem("addedName")));
  }, [])

  useEffect(() => {
    axios.get(API.BASE_URL + 'adminpanel/logolist/', {})
    .then(function(response) {
      console.log("Banner Image" , response.data[0].image);
      localStorage.setItem("Logo", "http://13.210.246.45:8000/media/" + response.data[0].image)
      
  })
  .catch(function(error) {
    console.log(error);
      
  })

  console.log("APP.js", prodDimension);
  }, [])

  useEffect(() => {
    axios.get(API.BASE_URL + 'adminpanel/salelist/', {})
    .then(function(response) {
      console.log("Sale List" , response.data);
      localStorage.setItem("Sale_Products", JSON.stringify(response.data))
      
  })
  .catch(function(error) {
    console.log(error);
      
  })
  }, [])

  return (
    <div className="App">
      <Routing />
      <ToastContainer autoclose={3000} />
    </div>
  );

}


export default App;
