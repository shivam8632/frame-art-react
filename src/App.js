import './App.scss';
<<<<<<< HEAD
import Routing from './routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from './components/context/UserContext';

function App() {
  const { setAuth } = useContext(UserContext); //Login Context
  useEffect(() => {
    var token = localStorage.getItem('loginToken');
    if (token != null) {
      console.log('Get Login Token', token)
      axios.get('http://44.201.12.222:8000/userprofile/', {
        headers: { "Authorization": `Bearer ${token}` }
      })
        .then((res) => {
          setAuth({
            user_name: res.data.First_name
          })
          console.log('profile Get', res.data.First_name);
        })

        .catch(function (error) {
          console.log(error.response);

        })

    }
  })
  return (
    <div className="App">
      <Routing />
      <ToastContainer autoclose={3000} />
=======

import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomePage from './components/home/HomePage';
import Shipping from './components/shipping/Shipping';
import Mailer from './components/mailer/Mailer';
import Product from './components/product/Product';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="routes">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/mailer' element={<Mailer />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </div>
      <Footer />
>>>>>>> 7065b2c93f53f5d91ade4383afa827e5018db14d
    </div>
  );
}

export default App;
